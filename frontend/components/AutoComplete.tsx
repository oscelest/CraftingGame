import _ from "lodash";
import * as React from "react";
import {ChangeEventHandler, KeyboardEventHandler} from "react";
import "./AutoComplete.less";

export default class AutoComplete extends React.Component<Props, State> {
  
  constructor(props: Props) {
    super(props);
    this.state = {
      open:   false,
      active: false,
    };
    this.blurValue = this.blurValue.bind(this);
    this.focusValue = this.focusValue.bind(this);
    this.clickValue = this.clickValue.bind(this);
    this.submitValue = this.submitValue.bind(this);
  }
  
  private focusValue(event: React.FocusEvent<HTMLInputElement>) {
    event.preventDefault();
    this.setState(_.merge({}, this.state, {active: true, open: true} as State));
  }
  
  private blurValue(event: React.FocusEvent<HTMLInputElement>) {
    event.preventDefault();
    this.setState(_.merge({}, this.state, {active: false, open: true} as State));
    // TODO: This should not be delayed.
    _.delay(() => !this.state.active && this.setState(_.merge({}, this.state, {active: false, open: false} as State)), 100);
  }
  
  private submitValue(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.charCode !== 13) return;
    event.preventDefault();
    this.props.onSubmit(event);
  }
  
  private clickValue(event: React.MouseEvent<HTMLSpanElement>, value: string) {
    event.preventDefault();
    this.setState(_.merge({}, this.state, {active: true, open: true} as State));
    this.props.onAutoComplete(value);
  }
  
  public render() {
    const list = _.take(_.filter(_.difference(this.props.list, this.props.blacklist || []), v => _.includes(v, this.props.value)).sort(), 5);
    
    return (
      <div className={"auto-complete"}>
        <input onChange={this.props.onChange} onKeyPress={this.submitValue} onBlur={this.blurValue} onFocus={this.focusValue}/>
        {
          this.state.open && !!list.length &&
          <div className={"select"}>
            {_.map(list, (element, key) =>
              <span className={"option"} key={key} onClick={e => this.clickValue(e, element)}>{element}</span>,
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
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>;
  onSubmit: KeyboardEventHandler<HTMLInputElement>;
  onAutoComplete: (value: string) => void;
}

interface State {
  open: boolean
  active: boolean
}
