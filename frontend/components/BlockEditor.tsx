import _ from "lodash";
import * as React from "react";
import Block, {BlockIntervalCondition, BlockValueCondition} from "../classes/Block";
import "./BlockEditor.less";
import ListIntervalCondition from "./BlockConditions/ListIntervalCondition";
import NumberIntervalCondition from "./BlockConditions/NumberIntervalCondition";
import ValueCondition from "./BlockConditions/ValueCondition";

class BlockEditor extends React.Component<Props, State> {
  
  constructor(props: Props) {
    super(props);
    this.state = {
      visibility: props.block.visibility,
      drop_level: props.block.drop_level ? _.clone(this.props.block.drop_level) : {},
      item_level: props.block.item_level ? _.clone(this.props.block.item_level) : {},
      quality: props.block.quality ? _.clone(this.props.block.quality) : {},
      rarity: props.block.rarity ? _.clone(this.props.block.rarity) : {},
      socket_group: props.block.socket_group ? _.clone(this.props.block.socket_group) : {},
    };
    this.print = this.print.bind(this);
    this.save = this.save.bind(this);
    this.changeBlockVisibility = this.changeBlockVisibility.bind(this);
  }
  
  private save() {
    _.merge(this.props.block, this.state);
  }
  
  private print() {
    console.log(this.props.block.print());
  }
  
  private changeBlockVisibility(event: React.ChangeEvent<HTMLInputElement>) {
    return this.setState(_.assign(this.state, {visibility: event.target.checked}));
    
  }
  
  public render() {
    return (
      <div className={"block-editor"}>
        {/*<div className="visibility">*/}
        {/*  <label htmlFor="visibility">Visibility</label>*/}
        {/*  <input type="checkbox" name="visibility" checked={this.state.visibility} onChange={this.changeBlockVisibility}/>*/}
        {/*</div>*/}
        
        <NumberIntervalCondition min={0} max={100} condition={this.props.block.drop_level} title={"Drop Level"}/>
        <NumberIntervalCondition min={0} max={100} condition={this.props.block.item_level} title={"Item Level"}/>
        <NumberIntervalCondition min={0} max={20} condition={this.props.block.quality} title={"Quality"}/>
        <ListIntervalCondition options={["", "normal", "magic", "rare", "unique"]} condition={this.props.block.rarity} title={"Rarity"}/>
        <ValueCondition filter={new RegExp("^[RGBW]{0,6}$",)} transform={v => v.toUpperCase()} condition={this.props.block.socket_group} title={"Socket Group"}/>
        
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
  visibility: boolean
  drop_level: BlockIntervalCondition<number>
  item_level: BlockIntervalCondition<number>
  quality: BlockIntervalCondition<number>
  rarity: BlockIntervalCondition<string>
  socket_group: BlockValueCondition<string>
}

export default BlockEditor;
