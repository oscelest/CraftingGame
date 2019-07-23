import _ from "lodash";
import * as React from "react";
import {BlockIntervalCondition} from "../../classes/Block";
import "./ListIntervalCondition.less";

class ListIntervalCondition extends React.Component<Props, State> {
  
  constructor(props: Props) {
    super(props);
    this.state = {
      condition: this.props.condition,
    };
    this.blurGTE = this.blurGTE.bind(this);
    this.blurLTE = this.blurLTE.bind(this);
    this.changeGTE = this.changeGTE.bind(this);
    this.changeLTE = this.changeLTE.bind(this);
  }
  
  private changeGTE(event: React.ChangeEvent<HTMLSelectElement>) {
    this.setState(_.merge(this.state, {condition: {gte: event.target.value}} as State));
  }
  
  private changeLTE(event: React.ChangeEvent<HTMLSelectElement>) {
    this.setState(_.merge(this.state, {condition: {lte: event.target.value}} as State));
  }
  
  private blurGTE() {
    const gte_index = this.getOptionIndex(this.state.condition.gte || "");
    const lte_index = this.getOptionIndex(this.state.condition.lte || "");
    this.setState(_.merge(this.state, {condition: {lte: gte_index > lte_index && this.state.condition.gte !== "" ? this.state.condition.gte : this.state.condition.lte}} as State));
  }
  
  private blurLTE() {
    const gte_index = this.getOptionIndex(this.state.condition.gte || "");
    const lte_index = this.getOptionIndex(this.state.condition.lte || "");
    this.setState(_.merge(this.state, {condition: {gte: gte_index > lte_index && this.state.condition.lte !== "" ? this.state.condition.lte : this.state.condition.gte}} as State));
  }
  
  private getOptionIndex(option: string): number {
    return _.findIndex(this.props.options, v => v === option);
  }
  
  public render() {
    return (
      <div className="list-interval-condition">
        <span className={"title"}>{this.props.title}</span>
        <div className={"interval"}>
          <select onChange={this.changeGTE} onBlur={this.blurGTE} value={this.state.condition.gte || ""}>
            {_.map(this.props.options, (option, key) => <option key={key} value={option}>{option}</option>)}
          </select>
          <span>-</span>
          <select onChange={this.changeLTE} onBlur={this.blurLTE} value={this.state.condition.lte || ""}>
            {_.map(this.props.options, (option, key) => <option key={key} value={option}>{option}</option>)}
          </select>
        </div>
      </div>
    );
  }
  
}

interface Props {
  title: string
  options: string[]
  condition: BlockIntervalCondition<string>
}

interface State {
  condition: BlockIntervalCondition<string>
}

export default ListIntervalCondition;
