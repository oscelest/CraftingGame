import _ from "lodash";
import * as React from "react";
import {BlockValueCondition} from "../../classes/Block";
import "./Condition.less";

export default class BooleanCondition extends React.Component<Props, State> {
  
  constructor(props: Props) {
    super(props);
    this.state = {
      condition: this.props.condition,
      value:     +this.props.condition.value,
      error:     {
        debounce: _.debounce(() => this.setState(_.merge({}, this.state, {error: {value: false}})), 300),
        value:    false,
      },
    };
    this.changeValue = this.changeValue.bind(this);
  }
  
  private changeValue() {
    this.setState(_.merge(this.state, {value: +!this.state.condition.value, condition: {value: !this.state.condition.value}} as State));
  }
  
  public render() {
    return (
      <div className="condition boolean-condition">
        <div className={"control"}>
          <span className={"title"}>{this.props.title}</span>
          <div className={"value"}>
            <input className={"boolean"} type={"checkbox"} onChange={this.changeValue} value={this.state.value || 0}/>
          </div>
        </div>
      </div>
    );
  }
  
}

interface Props {
  title: string
  condition: BlockValueCondition<boolean>
}

interface State {
  error: {
    debounce: Function
    value: boolean
  }
  value: number
  condition: BlockValueCondition<boolean>
}
