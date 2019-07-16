import React from "react";
import {Global} from "../../typings/Global";
import ItemFilterList from "../components/ItemFilterList";
import {ipc} from "./_app";

export default class IndexPage extends React.Component<Props, State> {
  
  constructor(props: Props) {
    super(props);
  }
  
  private load() {
    ipc.send("message", "filter", "load", []);
  }
  
  public render() {
    const items = {"Vaal Axe": ["Hezmana's Bloodlust", "Atziri's Disfavour"], "Infernal Sword": ["Starforge", "Oro's Sacrifice"], "Stiletto": ["Bloodplay"]};
    
    return (
      <div id="index-page" key="page">
        <button onClick={this.load}>Load</button>
        
        <ItemFilterList items={items}/>
      </div>
    );
  }
}

interface Props extends Global.Props {

}

interface State {

}
