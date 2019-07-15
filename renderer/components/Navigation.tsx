import _ from "lodash";
import Link from "next/link";
import * as React from "react";
import "./Navigation.less";
import {Global} from "../../typings/Global";

class Navigation extends React.Component<Props, State> {
  
  constructor(props: Props) {
    super(props);
    this.state = {
      list: null,
    };
    this.clickSetList = this.clickSetList.bind(this);
  }
  
  private clickSetList(view: null | "folder" | "tag") {
    this.setState(Object.assign({}, this.state, {list: view} as State));
  }
  
  public render() {
    return (
      <nav>
        <div className="buttons">
          <Link href="/">
            <button>🏠</button>
          </Link>
          <button onClick={() => this.clickSetList(this.state.list === "folder" ? null : "folder")}>📁</button>
          <button onClick={() => this.clickSetList(this.state.list === "tag" ? null : "tag")}>️🏷️</button>
        </div>
        <div className={_.join(_.filter(["list", this.state.list ? "active" : ""]), " ")}>
        </div>
      </nav>
    );
  }
  
}

interface Props extends Global.Props {
}

interface State {
  list: null | "folder" | "tag";
}

export default Navigation;
