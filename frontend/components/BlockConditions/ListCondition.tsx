import _ from "lodash";
import * as React from "react";
import {BlockListCondition} from "../../classes/Block";
import "./ListCondition.less";
import AutoComplete from "../AutoComplete";

export default class ListCondition extends React.Component<Props, State> {
  
  constructor(props: Props) {
    super(props);
    this.state = {
      condition: this.props.condition,
      value:     "",
    };
    this.changeValue = this.changeValue.bind(this);
    this.autocompleteValue = this.autocompleteValue.bind(this);
    this.submit = this.submit.bind(this);
    this.remove = this.remove.bind(this);
    console.log(this.props.list);
  }
  
  private changeValue(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState(_.merge({}, this.state, {value: event.target.value}));
  }
  
  private autocompleteValue(value: string) {
    this.state.condition.values.push(value);
    this.setState(_.merge({}, this.state, {value: "", condition: this.state.condition}));
  }
  
  private submit(event: React.KeyboardEvent<HTMLInputElement>) {
    const value = (event.target as HTMLInputElement).value;
    if (!_.includes(this.props.list, value)) return;
    this.state.condition.values.push(value);
    this.setState(_.merge({}, this.state, {value: "", condition: this.state.condition}));
  }
  
  private remove(event: React.MouseEvent<HTMLSpanElement>, key: number) {
    event.preventDefault();
    this.state.condition.values.splice(key, 1);
    this.setState(_.assign({}, this.state));
  }
  
  public render() {
    return (
      <div className="list-condition">
        <div className={"control"}>
          <span className={"title"}>{this.props.title}</span>
          <AutoComplete value={this.state.value || ""} list={this.props.list} onChange={this.changeValue} onSubmit={this.submit} onAutoComplete={this.autocompleteValue} blacklist={this.state.condition.values}/>
        </div>
        <div className={"values"}>
          {_.map(this.state.condition.values, (value, key) =>
            <div className={"value"} key={key}>
              <span className={"text"}>{value}</span>
              <span className={"action"} onClick={e => this.remove(e, key)}>🗙</span>
            </div>,
          )}
        </div>
      </div>
    );
  }
  
}

interface Props {
  title: string
  list: string[]
  condition: BlockListCondition<string>
}

interface State {
  condition: BlockListCondition<string>
  value: string
}
