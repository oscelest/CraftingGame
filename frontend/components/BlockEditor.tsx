import Block from "../classes/Block";
import BaseTypes from "../static/json/base_types.json";
import _ from "lodash";
import * as React from "react";
import "./BlockEditor.less";
import ListCondition from "./BlockConditions/ListCondition";
import ListIntervalCondition from "./BlockConditions/ListIntervalCondition";
import NumberIntervalCondition from "./BlockConditions/NumberIntervalCondition";
import ValueCondition from "./BlockConditions/ValueCondition";

class BlockEditor extends React.Component<Props, State> {
  
  constructor(props: Props) {
    super(props);
    this.state = _.reduce(this.props.block, (r,v,k) => _.set(r, k, _.clone(v)), {} as Block);
    this.print = this.print.bind(this);
    this.save = this.save.bind(this);
  }
  
  private save() {
    console.log(this.props.block, this.state);
    _.merge(this.props.block, this.state);
  }
  
  private print() {
    console.log(this.props.block.print());
  }
  
  public render() {
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
        <ValueCondition filter={new RegExp("^[RGBW]{0,6}$",)} transform={v => v.toUpperCase()} condition={this.state.socket_group} title={"Socket Group"}/>
        <ListCondition list={BaseTypes} condition={this.state.base_type} title={"Base Types"}/>
        
        {/*<div className="item-level">*/}
        {/*  <span>Item Level</span>*/}
        {/*  <label htmlFor="item-level-gte">GTE:</label>*/}
        {/*  <input min={0} max={100} name="item-level-gte" value={this.state.item_level.gte || ""} onChange={event => this.changeBlockValueNumber("item_level", "gte", event)}/>*/}
        {/*  <label htmlFor="item-level-lte">LTE:</label>*/}
        {/*  <input min={0} max={100} name="item-level-lte" value={this.state.item_level.lte || ""} onChange={event => this.changeBlockValueNumber("item_level", "lte", event)}/>*/}
        {/*</div>*/}
        {/**/}
        {/*<div className="quality">*/}
        {/*  <label htmlFor="item-level-gte">GTE:</label>*/}
        {/*  <input min={0} max={100} name="quality" value={this.state.item_level.gte || ""} onChange={event => this.changeBlockValueNumber("item_level", "gte", event)}/>*/}
        {/*</div>*/}
        
        <button onClick={this.save}>Save</button>
        <button onClick={this.print}>Print</button>
      </div>
    );
  }
  
}

interface Props {
  block: Block
}

interface State extends Pick<Block, { [K in keyof Block]: Block[K] extends Function ? never : K }[keyof Block]> {

}

export default BlockEditor;
