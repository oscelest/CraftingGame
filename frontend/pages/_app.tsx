import _ from "lodash";
import App, {Container} from "next/app";
import * as React from "react";
import {Global} from "../../typings/Global";
import IPC from "../../typings/IPC";
import Application from "../../typings/Application";
import Layout from "../components/Layout";

class PictologueApp extends App {
  
  public state: Global.State;
  
  constructor(props: any) {
    super(props);
    this.state = {
      ready:         {
        connect:    {
          database: false,
        },
        initialize: {
          item_class: false,
          base_type:  false,
          unique:     false,
        },
        find:       {
          item_class: false,
          base_type:  false,
          unique:     false,
        },
      },
      configuration: {
        maximized: false,
      },
      data:          {
        item_class: [],
        base_type:  {},
        unique:     {},
      },
    };
  }
  
  public async componentDidMount() {
    const ipc_methods: IPC.Frontend.Handlers = {
      filter:     (await import("../ipc/filter")).default,
      database:   (await import("../ipc/database")).default,
      base_type:  (await import("../ipc/base_type")).default,
      item_class: (await import("../ipc/item_class")).default,
      unique:     (await import("../ipc/unique")).default,
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
    
    application.prepare.connections();
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
export const application: Application = {
  prepare: {
    done: {
      connections: false,
      initializations: false,
      resources: false
    },
    connections() {
      if (application.prepare.done.connections) return;
      application.prepare.done.connections = true;
      ipc.send("message", "database", "connect", []);
    },
    initializations() {
      if (application.prepare.done.initializations) return;
      application.prepare.done.initializations = true;
      ipc.send("message", "base_type", "initialize", []);
      ipc.send("message", "item_class", "initialize", []);
      ipc.send("message", "unique", "initialize", []);
    },
    resources() {
      if (application.prepare.done.resources) return;
      application.prepare.done.resources = true;
      ipc.send("message", "base_type", "find", []);
      ipc.send("message", "item_class", "find", []);
      ipc.send("message", "unique", "find", []);
    },
  }
};
