import App, {Container} from "next/app";
import * as React from "react";
import {Global} from "../../typings/Global";
import IPC from "../../typings/IPC";
import Layout from "../components/Layout";
import _ from "lodash";

class PictologueApp extends App {
  
  public state: Global.State;
  
  constructor(props: any) {
    super(props);
    this.state = {
      ready:         false,
      data:          {
        item_class: [],
        item_affix: [],
        base_type:  [],
        unique:     [],
        prophecy:   [],
      },
      data_size:     {
        item_class: 0,
        item_affix: 0,
        base_type:  0,
        unique:     0,
        prophecy:   0,
      },
      connections:   {
        database: null
      },
      configuration: {
        maximized: false,
      },
    };
  }
  
  public async componentDidMount() {
    const ipc_methods: IPC.Frontend.Handlers = {
      count:      (await import("../ipc/count")).default,
      filter:     (await import("../ipc/filter")).default,
      database:   (await import("../ipc/database")).default,
      initialize: (await import("../ipc/initialize")).default,
    };
    
    ipc.on("message", async (event, handler, method, params) => {
      // console.log(event, handler, method, params);
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
    
    if (this.state.connections.database === null) {
      this.setState(_.merge({}, this.state, {connections: {database: false}} as Global.State));
      ipc.send("message", "database", "connect", []);
    }
  }
  
  public componentWillUnmount(): void {
    ipc.removeAllListeners("message");
    ipc.removeAllListeners("error");
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

export default PictologueApp;
export const ipc: IPC.Frontend = global.ipc;
