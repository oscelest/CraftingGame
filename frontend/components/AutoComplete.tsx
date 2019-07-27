import _ from "lodash";
import * as React from "react";
import "./AutoComplete.less";

export default class AutoComplete extends React.Component<Props, State> {
  
  constructor(props: Props) {
    super(props);
    this.state = {
      value:         "",
      index:         -1,
      active:        false,
      select_length: this.props.select_length || 5,
    };
    this.blurInput = this.blurInput.bind(this);
    this.focusInput = this.focusInput.bind(this);
    this.changeInput = this.changeInput.bind(this);
    this.mouseEnterOption = this.mouseEnterOption.bind(this);
    this.mouseLeaveOption = this.mouseLeaveOption.bind(this);
    this.mouseUpOption = this.mouseUpOption.bind(this);
    this.mouseDownOption = this.mouseDownOption.bind(this);
    this.keydownInput = this.keydownInput.bind(this);
  }
  
  private sanitizeList() {
    const lower_value = _.toLower(this.state.value);
    const blacklisted = _.difference(this.props.list, this.props.blacklist || []);
    const filtered = _.filter(blacklisted, v => _.includes(_.toLower(v), lower_value));
    const sorted = filtered.sort((a, b) => {
      const lower_a = _.toLower(a);
      const lower_b = _.toLower(b);
      if (lower_a.indexOf(lower_value) === 0 && lower_b.indexOf(lower_value) !== 0) return -1;
      if (lower_b.indexOf(lower_value) === 0 && lower_a.indexOf(lower_value) !== 0) return 1;
      if (lower_a < lower_b) return -1;
      if (lower_a > lower_b) return 1;
      return 0;
    });
    return _.take(sorted, this.state.select_length);
  }
  
  private focusInput() {
    this.setState(_.merge({}, this.state, {active: true, index: -1} as State));
  }
  
  private blurInput() {
    this.setState(_.merge({}, this.state, {active: false, index: -1} as State));
  }
  
  private changeInput(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState(_.merge({}, this.state, {value: event.target.value}));
  }
  
  private keydownInput(event: React.KeyboardEvent<HTMLInputElement>) {
    switch (event.keyCode) {
      case 13:
        if (this.state.index === -1) {
          const target = event.target as HTMLInputElement;
          this.setState(_.merge({}, this.state, {value: target.value = ""}));
          return this.props.onSubmit(target.value);
        }
        this.props.onSubmit(this.sanitizeList()[this.state.index]);
        const list = this.sanitizeList();
        return this.setState(_.merge({}, this.state, {index: list.length === 0 ? -1 : this.state.index + 1 > list.length ? this.state.index - 1 : this.state.index}));
      case 38:
        event.preventDefault();
        return this.state.index > -1 && this.setState(_.merge({}, this.state, {index: this.state.index - 1}));
      case 40:
        event.preventDefault();
        return this.state.index < this.sanitizeList().length - 1 && this.setState(_.merge({}, this.state, {index: this.state.index + 1}));
    }
  }
  
  private mouseDownOption(event: React.MouseEvent<HTMLSpanElement>, key: number) {
    if (this.state.index === key) event.preventDefault();
  }
  
  private mouseUpOption(event: React.MouseEvent<HTMLSpanElement>, key: number) {
    if (this.state.index === key) {
      event.preventDefault();
      this.props.onSubmit((event.target as HTMLSpanElement).innerHTML);
    }
  }
  
  private mouseEnterOption(key: number) {
    this.setState(_.merge({}, this.state, {index: key} as State));
  }
  
  private mouseLeaveOption() {
    this.setState(_.merge({}, this.state, {index: -1} as State));
  }
  
  public render() {
    const list = this.sanitizeList();
    // TODO: Better sorting.
    return (
      <div className={"auto-complete"}>
        {/* TODO: Arrow up and down. */}
        <input onFocus={this.focusInput} onBlur={this.blurInput} onChange={this.changeInput} onKeyDown={this.keydownInput}/>
        {
          this.state.active && !!list.length &&
          <div className={"select"}>
            {_.map(list, (value, key) =>
              <span className={_.join(_.filter(["option", this.state.index === key ? "selected" : ""]), " ")} key={key}
                    onMouseEnter={() => this.mouseEnterOption(key)} onMouseLeave={this.mouseLeaveOption}
                    onMouseDown={event => this.mouseDownOption(event, key)} onMouseUp={event => this.mouseUpOption(event, key)}>{value}</span>,
            )}
          </div>
        }
      </div>
    );
  }
  
}

interface Props {
  select_length?: number
  list: string[]
  blacklist?: string[]
  onSubmit: (value: string) => void;
}

interface State {
  value: string
  index: number
  active: boolean
  select_length: number
}
