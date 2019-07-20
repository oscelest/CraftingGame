import _ from "lodash";
import * as React from "react";
import "./BlockEditor.less";

class IntervalCondition extends React.Component<Props, State> {
  
  constructor(props: Props) {
    super(props);
    this.state = {
      condition: this.props.condition,
    };
  }
  
  public render() {
    return (
        <div className="interval-condition">
          <span className={"title"}>Drop Level: </span>
          <div className={"interval"}>
            <input min={this.props.min} max={this.props.max} value={this.props.condition.gte || ""} onChange={event => this.changeLTE("drop_level", "gte", event)} placeholder={"from"}/>
            <span>-</span>
            <input min={0} max={100} value={this.state.drop_level.lte || ""} onChange={event => this.changeBlockValueNumber("drop_level", "lte", event)} placeholder={"to"}/>
          </div>
        </div>
    );
  }
  
}

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  min: number
  max: number
  condition: {
    lte: number
    gte: number
  }
}

interface State {

}

export default IntervalCondition;
