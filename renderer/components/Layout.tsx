import Head from "next/head";
import * as React from "react";

class Layout extends React.Component<Props, State> {
  
  public render() {
    return [
      <Head key="head">
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>,
      <header key="header">
        I am a header!
        <hr/>
      </header>,
      <main key="main">
        {this.props.children}
      </main>,
      <footer key="footer">
        <hr/>
        I am a footer!
      </footer>,
    ];
  }
  
}

interface Props {
  title?: string
}

interface State {

}

export default Layout;
