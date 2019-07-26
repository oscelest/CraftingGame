import _ from "lodash";
import * as React from "react";
import "./AutoComplete.less";

export default class AutoComplete extends React.Component<Props, State> {
  
  constructor(props: Props) {
    super(props);
    this.state = {
      value:    "",
      selected: undefined,
      active:   false,
    };
    this.blurValue = this.blurValue.bind(this);
    this.focusValue = this.focusValue.bind(this);
    this.changeValue = this.changeValue.bind(this);
    this.mouseupValue = this.mouseupValue.bind(this);
    this.mousedownValue = this.mousedownValue.bind(this);
    this.submitValue = this.submitValue.bind(this);
  }
  
  private focusValue() {
    this.setState(_.merge({}, this.state, {active: true} as State));
  }
  
  private blurValue() {
    this.setState(_.merge({}, this.state, {active: false} as State));
  }
  
  private changeValue(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState(_.merge({}, this.state, {value: event.target.value}));
  }
  
  private submitValue(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.charCode !== 13) return;
    const target = event.target as HTMLInputElement;
    this.props.onSubmit(target.value);
    this.setState(_.merge({}, this.state, {value: target.value = ""}));
  }
  
  private mousedownValue(event: React.MouseEvent<HTMLSpanElement>) {
    event.preventDefault();
    this.setState(_.merge({}, this.state, {active: true, selected: event.target} as State));
  }
  
  private mouseupValue(event: React.MouseEvent<HTMLSpanElement>) {
    event.preventDefault();
    if (this.state.selected === event.target) {
      this.setState(_.merge({}, this.state, {active: true, selected: undefined} as State));
      this.props.onSubmit((event.target as HTMLSpanElement).innerHTML);
    }
  }
  
  public render() {
    // TODO: Better sorting.
    const list = _.take(_.filter(_.difference(this.props.list, this.props.blacklist || []), v => _.includes(_.toLower(v), _.toLower(this.state.value))).sort(), 5);
    
    return (
      <div className={"auto-complete"}>
        {/* TODO: Arrow up and down. */}
        <input onFocus={this.focusValue} onBlur={this.blurValue} onChange={this.changeValue} onKeyPress={this.submitValue}/>
        {
          this.state.active && !!list.length &&
          <div className={"select"}>
            {_.map(list, (value, key) =>
              <span className={"option"} key={key} onMouseDown={this.mousedownValue} onMouseUp={this.mouseupValue}>{value}</span>,
            )}
          </div>
        }
      </div>
    );
  }
  
}

interface Props {
  list: string[]
  blacklist?: string[]
  onSubmit: (value: string) => void;
}

interface State {
  value: string
  selected?: HTMLSpanElement
  active: boolean
}
