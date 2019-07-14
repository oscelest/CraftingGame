import React from "react";
import {Global} from "../../typings/Global";

export default class IndexPage extends React.Component<Props, State> {
  
  constructor(props: Props) {
    super(props);
  }
  
  public render() {
    return (
      <div id="index-page" key="page">
        {/*{*/}
        {/*  this.props.global.tags*/}
        {/*  ?*/}
        {/*  [*/}
        {/*    <div className="recent-tags" key="tags">*/}
        {/*      <div className="title">Recent Tags</div>*/}
        {/*      <div className="container">*/}
        {/*        {*/}
        {/*          _.size(this.props.global.tags)*/}
        {/*          ?*/}
        {/*          _.map(this.props.global.tags, (tag, id) =>*/}
        {/*            <Link>*/}
        {/*              <div className="tag" key={id}>*/}
        {/*                <div>{tag.id}</div>*/}
        {/*              </div>*/}
        {/*            </Link>,*/}
        {/*          )*/}
        {/*          :*/}
        {/*          <span>No recent folders</span>*/}
        {/*        }*/}
        {/*      </div>*/}
        {/*    </div>,*/}
        {/*    <div className="recent-folders" key="folders">*/}
        {/*      <div className="title">Recent Folders</div>*/}
        {/*      <div className="container">*/}
        {/*        {*/}
        {/*          _.size(this.props.global.folders)*/}
        {/*          ?*/}
        {/*          _.map(this.props.global.folders, (tag, id) =>*/}
        {/*            <Link>*/}
        {/*              <div className="folder" key={id}>*/}
        {/*                <div>{tag.id}</div>*/}
        {/*              </div>*/}
        {/*            </Link>,*/}
        {/*          )*/}
        {/*          :*/}
        {/*          <span>No recent folders</span>*/}
        {/*        }*/}
        {/*      </div>*/}
        {/*    </div>,*/}
        {/*  ]*/}
        {/*  :*/}
        {/*  <div className="loading">*/}
        {/*    Loading...*/}
        {/*  </div>*/}
        {/*}*/}
      </div>
    );
  }
}

interface Props extends Global.Props {

}

interface State {

}
