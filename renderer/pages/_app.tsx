import _ from "lodash";
import App, {Container} from "next/app";
import * as React from "react";
import {IPC} from "../../typings/IPC";
import Layout from "../components/Layout";

class PictologueApp extends App {
  
  public state: GlobalState;
  
  constructor(props: any) {
    super(props);
    this.state = {
      flag_maximized: false,
    };
  }
  
  public async componentDidMount() {
    const ipc_methods: IPC.RendererHandlers = {
      window: (await import("../ipc/window")).default,
    };
    
    global.ipc.on("message", (event, handler, method, params) => {
      try {
        const response = ipc_methods[handler][method].apply({state: this.state, setState: (state: GlobalState) => this.setState(state)}, _.concat(params));
        if (response !== undefined) event.sender.send(response instanceof Error ? "error" : "message", handler, method, response);
      }
      catch (exception) {
        console.log(exception);
        global.ipc.send("error", handler, method, exception);
      }
    });
    
    global.ipc.on("error", (e: any, m: any, v: any) => {
      console.log("IPC ERROR RENDERER", e, m, v);
    });
  }
  
  public render() {
    return (
      <Container>
        <Layout global={this.state}>
          <this.props.Component global={this.state} {...this.props.pageProps} />
        </Layout>
      </Container>
    );
  }
  
}

export interface GlobalProps {
  global: GlobalState
}

interface GlobalState {
  flag_maximized: boolean
}

export default PictologueApp;
