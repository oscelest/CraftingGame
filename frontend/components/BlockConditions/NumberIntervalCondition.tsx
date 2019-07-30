import _ from "lodash";
import * as React from "react";

class NumberIntervalCondition extends React.Component<Props, State> {
  
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
  
  private changeGTE(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState(_.merge(this.state, {condition: {gte: NumberIntervalCondition.getValue(event)}} as State));
  }
  
  private changeLTE(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState(_.merge(this.state, {condition: {lte: NumberIntervalCondition.getValue(event)}} as State));
  }
  
  private blurGTE() {
    const gte_value = this.state.condition.gte || 0;
    const lte_value = this.state.condition.lte || 0;
    this.setState(_.merge(this.state, {condition: {lte: gte_value > lte_value ? gte_value : lte_value}} as State));
  }
  
  
  private blurLTE() {
    const gte_value = this.state.condition.gte || 0;
    const lte_value = this.state.condition.lte || 0;
    this.setState(_.merge(this.state, {condition: {gte: gte_value > lte_value ? lte_value : gte_value}} as State));
  }
  
  private static getValue(event: React.ChangeEvent<HTMLInputElement>) {
    const min = +((event.target.attributes.getNamedItem("min") || {value: undefined}).value || NaN);
    const max = +((event.target.attributes.getNamedItem("max") || {value: undefined}).value || NaN);
    const value = +event.target.value;
    
    if (value < min) return min;
    if (value > max) return max;
    return value;
  }
  
  public render() {
    return (
      <div className="condition number-interval-condition">
        <div className={"control"}>
          <span className={"title"}>{this.props.title}</span>
          <div className={"value"}>
            <input className={"gte"} min={this.props.min} max={this.props.max} value={this.state.condition.gte || ""} onChange={this.changeGTE} onBlur={this.blurGTE} placeholder={"from"}/>
            <span className={"to"}>-</span>
            <input className={"gte"} min={this.props.min} max={this.props.max} value={this.state.condition.lte || ""} onChange={this.changeLTE} onBlur={this.blurLTE} placeholder={"to"}/>
          </div>
        </div>
      </div>
    );
  }
  
}

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  title: string
  min: number
  max: number
  condition: Condition
}

interface State {
  condition: Condition
}

interface Condition {
  lte?: number
  gte?: number
}

export default NumberIntervalCondition;
