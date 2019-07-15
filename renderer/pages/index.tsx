import React from "react";
import {Global} from "../../typings/Global";

export default class IndexPage extends React.Component<Props, State> {
  
  constructor(props: Props) {
    super(props);
  }
  
  public render() {
    return (
      <div id="index-page" key="page">
      
      </div>
    );
  }
}

interface Props extends Global.Props {

}

interface State {

}
