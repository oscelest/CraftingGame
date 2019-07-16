import _ from "lodash";
import App, {Container} from "next/app";
import * as React from "react";
import {Global} from "../../typings/Global";
import IPC from "../../typings/IPC";
import Layout from "../components/Layout";

export const ipc = global.ipc as IPC.Frontend;

class PictologueApp extends App {
  
  public state: Global.State;
  
  constructor(props: any) {
    super(props);
    this.state = {
      ready:          false,
      flag_maximized: false,
    };
  }
  
  public async componentDidMount() {
    const ipc_methods: IPC.Frontend.Handlers = {
      filter: (await import("../ipc/filter")).default,
    };
    
    ipc.on("message", async (event, handler, method, params) => {
      console.log(event, handler, method, params);
      try {
        const response = await ipc_methods[handler][method].apply({state: this.state, setState: (state: Global.State) => this.setState(state)}, params);
        if (response !== undefined) event.sender.send("message", handler, method, [response]);
      }
      catch (exception) {
        console.log(exception);
        event.sender.send("error", handler, method, exception);
      }
    });
    
    ipc.on("error", (e: any, m: any, v: any) => {
      console.log("IPC ERROR RENDERER", e, m, v);
    });
    
    this.setState(_.assign({}, this.state, {ready: true}));
  }
  
  public render() {
    return (
      <Container>
        <Layout global={this.state}>
          {
            this.state.ready ? <this.props.Component global={this.state} {...this.props.pageProps} /> : <div/>
          }
        </Layout>
      </Container>
    );
  }
  
}

export default PictologueApp;
