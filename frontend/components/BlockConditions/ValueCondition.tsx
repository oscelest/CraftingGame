import _ from "lodash";
import * as React from "react";
import {BlockValueCondition} from "../../classes/Block";
import "./ValueCondition.less";

export default class ValueCondition extends React.Component<Props, State> {
  
  constructor(props: Props) {
    super(props);
    this.state = {
      condition: this.props.condition,
      error:     {
        debounce: _.debounce(() => this.setState(_.merge({}, this.state, {error: {value: false}})), 300),
        value:    false,
      },
    };
    this.changeValue = this.changeValue.bind(this);
  }
  
  private changeValue(event: React.ChangeEvent<HTMLInputElement>) {
    const value = this.props.transform ? this.props.transform(event.target.value) : event.target.value;
    if (this.props.filter && !value.match(this.props.filter)) {
      this.setState(_.merge({}, this.state, {error: {value: true}}));
      return this.state.error.debounce();
    }
    this.setState(_.merge({}, this.state, {condition: {value: value}} as State));
  }
  
  public render() {
    return (
      <div className="value-condition">
        <span className={"title"}>{this.props.title}</span>
        <input className={_.join(_.filter(["value", this.state.error.value ? "error" : null]), " ")} onChange={this.changeValue} value={this.state.condition.value || ""}/>
      </div>
    );
  }
  
}

interface Props {
  title: string
  filter: RegExp
  transform?: (value: string) => string
  condition: BlockValueCondition<string>
}

interface State {
  error: {
    debounce: Function
    value: boolean
  }
  condition: BlockValueCondition<string>
}
