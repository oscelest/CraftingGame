import React from "react";
import {Global} from "../../typings/Global";
import Block from "../classes/Block";
import BlockEditor from "../components/BlockEditor";

export default class IndexPage extends React.Component<Props, State> {
  
  constructor(props: Props) {
    super(props);
  }
  
  // private load() {
  //   ipc.send("message", "filter", "load", []);
  // }
  
  public render() {
    const block = new Block();
    
    return (
      <div id="index-page" key="page">
        <BlockEditor global={this.props.global} block={block}/>
      </div>
    );
  }
}

interface Props extends Global.Props {

}

interface State {

}
