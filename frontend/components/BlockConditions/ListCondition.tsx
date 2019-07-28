import _ from "lodash";
import * as React from "react";
import {BlockListCondition} from "../../classes/Block";
import AutoComplete from "../AutoComplete";
import "./ListCondition.less";

export default class ListCondition extends React.Component<Props, State> {
  
  constructor(props: Props) {
    super(props);
    this.state = {};
    this.submitValue = this.submitValue.bind(this);
    this.removeValue = this.removeValue.bind(this);
  }
  
  private submitValue(value: string) {
    const element = _.find(_.difference(this.props.list, this.props.condition.values), element => _.toLower(element) === _.toLower(value));
    if (!element) return;
    this.props.condition.values.push(element);
    this.setState(_.merge({}, this.state));
    if (this.props.onValueAdded) this.props.onValueAdded(element)
  }
  
  private removeValue(key: number) {
    const removed = this.props.condition.values.splice(key, 1);
    this.setState(_.merge({}, this.state));
    if (this.props.onValueRemoved) this.props.onValueRemoved(_.head(removed) as string)
  }
  
  public render() {
    return (
      <div className="list-condition">
        <div className={"control"}>
          <span className={"title"}>{this.props.title}</span>
          <AutoComplete list={this.props.list} blacklist={this.props.condition.values} onSubmit={this.submitValue}/>
        </div>
        <div className={"values"}>
          {_.map(this.props.condition.values, (value, key) =>
            <div className={"value"} key={key}>
              <span className={"text"}>{value}</span>
              <span className={"action"} onClick={this.removeValue.bind(this, key)}>🗙</span>
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
  onValueAdded?: (value: string) => void
  onValueRemoved?: (value: string) => void
}

interface State {
}
