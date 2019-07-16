import _ from "lodash";
import Link from "next/link";
import * as React from "react";
import "./Navigation.less";
import {Global} from "../../typings/Global";

class Navigation extends React.Component<Props, State> {
  
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }
  
  public render() {
    return (
      <nav>
        <div className="buttons">
          <Link href="/">
            <button>🏠</button>
          </Link>
          <button>📁</button>
          <button>️🏷️</button>
        </div>
      </nav>
    );
  }
  
}

interface Props extends Global.Props {
}

interface State {
}

export default Navigation;
