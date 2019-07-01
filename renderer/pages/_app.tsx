import App, {Container} from "next/app";
import * as React from "react";

class PictologueApp extends App {
  
  public render() {
    return (
      <Container>
        <this.props.Component {...this.props.pageProps} />
      </Container>
    );
  }
  
}

export default PictologueApp;
