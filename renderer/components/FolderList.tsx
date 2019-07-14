import _ from "lodash";
import Link from "next/link";
import * as React from "react";
import Folder from "../../main/entity/Folder";
import {ipc} from "../pages/_app";
import "./FolderList.less";

class FolderList extends React.Component<Props, State> {
  
  constructor(props: Props) {
    super(props);
    this.clickCreateFolder = this.clickCreateFolder.bind(this);
    this.clickRefreshFolder = this.clickRefreshFolder.bind(this);
    this.clickOpenFolder = this.clickOpenFolder.bind(this);
    this.clickDeleteFolder = this.clickDeleteFolder.bind(this);
  }
  
  public componentDidMount(): void {
    ipc.send("message", "folder", "find", []);
  }
  
  private clickRefreshFolder() {
    ipc.send("message", "folder", "find", []);
  }
  
  private clickCreateFolder() {
    ipc.send("message", "folder", "create", []);
  }
  
  private clickDeleteFolder(folder_id: string) {
    ipc.send("message", "folder", "remove", [folder_id]);
  }
  
  private clickOpenFolder(path: string) {
    ipc.send("message", "folder", "open", [path]);
  }
  
  public render() {
    return (
      <div className="folder-list" {...this.props}>
        <div className="controls">
          <button className="import" onClick={this.clickCreateFolder}>📁</button>
          <button className="refresh" onClick={this.clickRefreshFolder}>♻️</button>
        </div>
        <div className="folders">
          {
            _.size(this.props.folders)
            ?
            Object.values(this.props.folders).map(v =>
              <div key={v.id} className="folder">
                <Link href={{pathname: "/folder", query: {folder_id: v.id}}}>
                  <a className="name" title={v.path}>{_.get(v.path.match(/(?<=[\\/])[^\\\/]+$/), 0, v.path)}</a>
                </Link>
                <button className="open" onClick={() => this.clickOpenFolder(v.path)}>📁</button>
                <button className="delete" onClick={() => this.clickDeleteFolder(v.id)}>❌</button>
                <Link href={"/folder/" + v.id}>
                  <div className="icon"></div>
                </Link>
              </div>,
            )
            :
            <div className="no-folders">
              No folders added yet
            </div>
          }
        </div>
      </div>
    );
  }
  
}

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  folders: {[key: string]: Folder}
}

interface State {
}

export default FolderList;
