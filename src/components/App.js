import React from "react";
import { Fragment } from "react";
import Navbar from "./Navbar";

import { Container } from "semantic-ui-react";
import Forum from "./Forum";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Container>
          <Forum />
        </Container>
      </Fragment>
    );
  }
}

export default App;
