import _ from "lodash";
import * as React from "react";
import {Global} from "../../typings/Global";
import Block from "../classes/Block";
import ListCondition from "./BlockConditions/ListCondition";
import ListIntervalCondition from "./BlockConditions/ListIntervalCondition";
import NumberIntervalCondition from "./BlockConditions/NumberIntervalCondition";
import ValueCondition from "./BlockConditions/ValueCondition";
import "./BlockEditor.less";

class BlockEditor extends React.Component<Props, State> {
  
  constructor(props: Props) {
    super(props);
    this.state = _.reduce(this.props.block, (r, v, k) => _.set(r, k, _.clone(v)), {} as Block);
    this.print = this.print.bind(this);
    this.save = this.save.bind(this);
    this.refresh = this.refresh.bind(this);
  }
  
  private save() {
    console.log(this.props.block, this.state);
    _.merge(this.props.block, this.state);
  }
  
  private print() {
    console.log(this.props.block.print());
  }
  
  private refresh() {
    this.setState(this.state);
  }
  
  public render() {
    const item_classes = _.map(this.props.global.data.item_class, v => v.name);
    const base_types = _.map(_.flatten(_.values(_.pick(this.props.global.data.base_type, this.state.item_class.values))), v => v.name);
    
    return (
      <div className={"block-editor"}>
        {/*<div className="visibility">*/}
        {/*  <label htmlFor="visibility">Visibility</label>*/}
        {/*  <input type="checkbox" name="visibility" checked={this.state.visibility} onChange={this.changeBlockVisibility}/>*/}
        {/*</div>*/}
        
        <NumberIntervalCondition min={0} max={100} condition={this.state.drop_level} title={"Drop Level"}/>
        <NumberIntervalCondition min={0} max={100} condition={this.state.item_level} title={"Item Level"}/>
        <NumberIntervalCondition min={0} max={20} condition={this.state.quality} title={"Quality"}/>
        <ListIntervalCondition options={["", "normal", "magic", "rare", "unique"]} condition={this.state.rarity} title={"Rarity"}/>
        <ValueCondition filter={new RegExp("^[RGBW]{0,6}$")} transform={v => v.toUpperCase()} condition={this.state.socket_group} title={"Socket Group"}/>
        <ListCondition list={item_classes} condition={this.state.item_class} title={"Item Classes"} onValueAdded={this.refresh} onValueRemoved={this.refresh}/>
        <ListCondition list={base_types} condition={this.state.base_type} title={"Base Types"}/>
        
        <button onClick={this.save}>Save</button>
        <button onClick={this.print}>Print</button>
      </div>
    );
  }
  
}

interface Props extends Global.Props {
  block: Block
}

interface State extends Pick<Block, { [K in keyof Block]: Block[K] extends Function ? never : K }[keyof Block]> {

}

export default BlockEditor;
