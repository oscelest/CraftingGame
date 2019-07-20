import _ from "lodash";
import * as React from "react";
import Block from "../classes/Block";
import "./BlockEditor.less";

class BlockEditor extends React.Component<Props, State> {
  
  constructor(props: Props) {
    super(props);
    this.state = {
      visibility: props.block.visibility,
      drop_level: props.block.drop_level ? _.clone(this.props.block.drop_level) : {},
      item_level: props.block.item_level ? _.clone(this.props.block.item_level) : {},
    };
    this.print = this.print.bind(this);
    this.save = this.save.bind(this);
    this.changeBlockVisibility = this.changeBlockVisibility.bind(this);
    this.changeBlockValueNumber = this.changeBlockValueNumber.bind(this);
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
  
  private changeBlockValueNumber<Condition extends keyof Block, Key extends keyof Block[Condition]>(condition: Condition, key: Key, event: React.ChangeEvent<HTMLInputElement>): void {
    const min = +((event.target.attributes.getNamedItem("min") || {value: undefined}).value || NaN);
    const max = +((event.target.attributes.getNamedItem("ax") || {value: undefined}).value || NaN);
    const value = +event.target.value;
    
    if (value < min) return this.setState(_.set(this.state, [condition, key], min));
    if (value > max) return this.setState(_.set(this.state, [condition, key], max));
    return this.setState(_.set(this.state, [condition, key], value));
  }
  
  public render() {
    return (
      <div className={"block-editor"}>
        {/*<div className="visibility">*/}
        {/*  <label htmlFor="visibility">Visibility</label>*/}
        {/*  <input type="checkbox" name="visibility" checked={this.state.visibility} onChange={this.changeBlockVisibility}/>*/}
        {/*</div>*/}
        
        <div className="interval-condition">
          <span className={"title"}>Drop Level: </span>
          <div className={"interval"}>
            <input min={0} max={100} value={this.state.drop_level.gte || ""} onChange={event => this.changeBlockValueNumber("drop_level", "gte", event)} placeholder={"from"}/>
            <span>-</span>
            <input min={0} max={100} value={this.state.drop_level.lte || ""} onChange={event => this.changeBlockValueNumber("drop_level", "lte", event)} placeholder={"to"}/>
          </div>
        </div>
        
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
  drop_level: {lte?: number, gte?: number}
  item_level: {lte?: number, gte?: number}
}

export default BlockEditor;
