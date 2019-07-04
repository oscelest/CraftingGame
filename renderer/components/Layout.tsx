import Head from "next/head";
import * as React from "react";
import "./Layout.less";
import {GlobalProps} from "../pages/_app";

class Layout extends React.Component<Props, State> {
  
  constructor(props: Props) {
    super(props);
    this.clickWindowMinimize = this.clickWindowMinimize.bind(this);
    this.clickWindowMaximize = this.clickWindowMaximize.bind(this);
    this.clickWindowRestore = this.clickWindowRestore.bind(this);
    this.clickWindowClose = this.clickWindowClose.bind(this);
  }
  
  private clickWindowMinimize(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    global.ipc.send("message", "window", "minimize", []);
  }
  
  private clickWindowMaximize(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    global.ipc.send("message", "window", "maximize", []);
  }
  
  private clickWindowRestore(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    global.ipc.send("message", "window", "restore", []);
  }
  
  private clickWindowClose(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    global.ipc.send("message", "window", "close", []);
  }
  
  public render() {
    return [
      <Head key="head">
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>,
      <div id="title-bar" key="title-bar">
        <div id="window-title">
          <span>Pictologue</span>
        </div>
        <div id="window-controls">
          <button className="minimize" onClick={this.clickWindowMinimize}>🗕</button>
          {
            this.props.global.flag_maximized
            ? <button className="restore" onClick={this.clickWindowRestore}>🗗</button>
            : <button className="maximize" onClick={this.clickWindowMaximize}>🗖</button>
          }
          <button className="close" onClick={this.clickWindowClose}>✖</button>
        </div>
      </div>,
      <header id="header" key="header">
        <span>I am a header</span>
      </header>,
      <main id="main" key="main">
        {this.props.children}
      </main>,
      <footer id="footer" key="footer">
        <hr/>
        I am a footer!
      </footer>,
    ];
  }
  
}

interface Props extends GlobalProps {
  title?: string
}

interface State {
  flag_maximized: boolean
}

export default Layout;
