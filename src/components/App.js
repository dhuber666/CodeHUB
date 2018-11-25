import React from "react";
import { Fragment } from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router } from "react-router-dom";

import { Container } from "semantic-ui-react";
import Routes from "../routes";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Navbar />
          <Container>
            <Routes />
          </Container>
        </Fragment>
      </Router>
    );
  }
}

export default App;
