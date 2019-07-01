import React from "react";
import Electron from "electron";
import Layout from "../components/Layout";

export default class IndexPage extends React.Component<Props, State> {
  
  public componentDidMount() {
    // start listening the channel message
    global.ipc.on("message", (event: any, message: any) => {
      console.log("event", event);
      console.log("message", message);
    });
    
    global.ipc.send("message", "test");
    
  }
  
  public componentWillUnmount() {
    // stop listening the channel message
    // global.ipc.removeListener("message", () => {
    //   console.log("message")
    // });
  }
  
  public render() {
    return (
      <Layout>
        <h1>Hello Electron!</h1>
        <h2>Test!</h2>
      </Layout>
    );
  }
}

interface Props {

}

interface State {

}

declare global {
  namespace NodeJS {
    interface Global {
      ipc: Electron.IpcRenderer
    }
  }
}
