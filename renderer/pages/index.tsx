import react from "react";

export default class IndexPage extends react.Component {
  
  public componentDidMount() {
    // start listening the channel message
    // global.ipcRenderer.on("message", this.handleMessage);
  }
  
  public componentWillUnmount() {
    // stop listening the channel message
    // global.ipcRenderer.removeListener("message", this.handleMessage);
  }
  
  public render() {
    return (
      <div>
        <h1>Hello Electron!</h1>
      </div>
    );
  }
}
