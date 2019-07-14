import NextRouter from "next/router";
import React from "react";
import {Global} from "../../typings/Global";
import {ipc} from "./_app";

export default class FolderIdPage extends React.Component<Props, State> {
  
  constructor(props: Props) {
    super(props);
    this.state = {
      folder: NextRouter.query.folder_id as string,
    };
  }
  
  public componentDidMount(): void {
    ipc.send("message", "folder", "findCataloguedFiles", [this.state.folder]);
    ipc.send("message", "folder", "findUncataloguedFiles", [this.state.folder]);
  }
  
  public render() {
    
    
    console.log(this.props.global.folders);
    return (
      <div id="folder-page">
        This is me ({this.state.folder})
      </div>
    );
  }
}

interface Props extends Global.Props {

}

interface State {
  folder: string
}
