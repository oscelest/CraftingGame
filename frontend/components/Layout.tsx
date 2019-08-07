import Head from "next/head";
import * as React from "react";
import {Global} from "../../typings/Global";
import {ipc} from "../pages/_app";
import "./Layout.less";
import Navigation from "./Navigation";

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
    ipc.send("message", "window", "minimize", []);
  }
  
  private clickWindowMaximize(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    ipc.send("message", "window", "maximize", []);
  }
  
  private clickWindowRestore(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    ipc.send("message", "window", "restore", []);
  }
  
  private clickWindowClose(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    ipc.send("message", "window", "close", []);
  }
  
  public render() {
    const item_class_current = this.props.global.data.item_class.length;
    const item_class_total = this.props.global.data_size.item_class;
    
    return [
      <Head key="head">
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        <style> {`
          @font-face {font-family: Raleway; src: url(../static/fonts/Raleway-Regular.ttf);}
          @font-face {font-family: Raleway; src: url(../static/fonts/Raleway-Italic.ttf); font-style: italic;}
          @font-face {font-family: Raleway; src: url(../static/fonts/Raleway-Italic.ttf); font-weight: bold; font-style: italic;}
          @font-face {font-family: Raleway; src: url(../static/fonts/Raleway-Italic.ttf); font-weight: bold; font-style: italic;}
        `}
        </style>
      </Head>,
      <div id="title-bar" key="title-bar">
        <div id="window-title">Pictologue</div>
        <div id="window-controls">
          <button className="minimize" onClick={this.clickWindowMinimize}>🗕</button>
          {
            this.props.global.configuration.maximized
            ? <button className="restore" onClick={this.clickWindowRestore}>🗗</button>
            : <button className="maximize" onClick={this.clickWindowMaximize}>🗖</button>
          }
          <button className="close" onClick={this.clickWindowClose}>✖</button>
        </div>
      </div>,
      <header id="header" key="header"/>,
      <main id="main" key="main">
        {this.props.global.connections.database === false ? <span>Connecting to database...</span> : null}
        {item_class_current < item_class_total ? <span>Loading {item_class_current} of {item_class_total} Item Classes...</span> : null}
        {false && [
          <Navigation key="navigation" global={this.props.global}/>,
          this.props.children
        ]}
      </main>,
      <footer id="footer" key="footer"/>,
    ];
  }
  
}

interface Props extends Global.Props {
}

interface State {
  flag_maximized: boolean
}

export default Layout;
