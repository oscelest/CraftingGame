import _ from "lodash";
import * as React from "react";
import {Global} from "../../typings/Global";
import Block from "../classes/Block";
import BooleanCondition from "./BlockConditions/BooleanCondition";
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
    const prophecies = _.map(this.props.global.data.prophecy, v => v.name);
    const affixes = ["Tyrannical", "Merciless"];
    
    return (
      <div className={"block-editor"}>
        <BooleanCondition condition={this.state.visibility} title={"Visibility"}/>
        <NumberIntervalCondition min={0} max={100} condition={this.state.drop_level} title={"Drop Level"}/>
        <NumberIntervalCondition min={0} max={100} condition={this.state.item_level} title={"Item Level"}/>
        <NumberIntervalCondition min={0} max={20} condition={this.state.quality} title={"Quality"}/>
        <ListIntervalCondition options={["", "normal", "magic", "rare", "unique"]} condition={this.state.rarity} title={"Rarity"}/>
        <ListCondition list={item_classes} condition={this.state.item_class} title={"Item Classes"} onValueAdded={this.refresh} onValueRemoved={this.refresh}/>
        <ListCondition list={base_types} condition={this.state.base_type} title={"Base Types"}/>
        <ListCondition list={prophecies} condition={this.state.prophecy} title={"Prophecy"}/>
        <NumberIntervalCondition min={0} max={6} condition={this.state.sockets} title={"Sockets"}/>
        <NumberIntervalCondition min={0} max={6} condition={this.state.linked_sockets} title={"Linked Sockets"}/>
        <ValueCondition filter={new RegExp("^[RGBW]{0,6}$")} transform={v => v.toUpperCase()} condition={this.state.socket_group} title={"Socket Group"}/>
        <NumberIntervalCondition min={0} max={2} condition={this.state.width} title={"Item Width"}/>
        <NumberIntervalCondition min={0} max={4} condition={this.state.height} title={"Item Height"}/>
        <ListCondition list={affixes} condition={this.state.affixes} title={"Affixes"}/>
        <BooleanCondition condition={this.state.enchanted} title={"Enchantment"}/>
        <NumberIntervalCondition min={0} max={5000} condition={this.state.stack_size} title={"Stack Size"}/>
        <NumberIntervalCondition min={0} max={21} condition={this.state.gem_level} title={"Gem Level"}/>
        <BooleanCondition condition={this.state.identified} title={"Identified"}/>
        <BooleanCondition condition={this.state.corrupted} title={"Corrupted"}/>
        <BooleanCondition condition={this.state.shaper_item} title={"Shaper Item"}/>
        <BooleanCondition condition={this.state.elder_item} title={"Elder Item"}/>
        <BooleanCondition condition={this.state.synthesized_item} title={"Synthesized Item"}/>
        <BooleanCondition condition={this.state.fractured_item} title={"Fractured Item"}/>
        <NumberIntervalCondition min={0} max={16} condition={this.state.map_tier} title={"Map Tier"}/>
        <BooleanCondition condition={this.state.shaped_map} title={"Shaped Map"}/>
  
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
