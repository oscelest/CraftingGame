import React from "react";
import {GlobalProps} from "./_app";

export default class IndexPage extends React.Component<Props, State> {
  
  public render() {
    return [
      <h1 key={0}>Hello Electron!</h1>,
      <h2 key={1}>Test!</h2>,
    ];
  }
}

interface Props extends GlobalProps {

}

interface State {

}

// declare global {
//   namespace NodeJS {
//     interface Global {
//       ipc: Electron.IpcRenderer
//     }
//   }
// }
