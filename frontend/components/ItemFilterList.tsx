import * as React from "react";
import "./Navigation.less";
import _ from "lodash";

class ItemFilterList extends React.Component<Props, State> {
  
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }
  
  public render() {
    return (
      <div className="item-filter-list">
        {
          _.size(this.props.items) > 0 &&
          <div className="list">
            <div className="title">Unassigned</div>
            {_.map(this.props.items)}<div></div>
          </div>
        }
        
        <div></div>
      </div>
      
    );
  }
  
}

interface Props {
  items: {[key: string]: string[]}
}

interface State {
}

export default ItemFilterList;
