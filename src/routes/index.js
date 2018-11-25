import { BrowserRouter as Router, Route } from "react-router-dom";
import Forum from "../components/Forum";
import Admin from "../components/Admin";
import React from "react";

const Routes = () => {
  return (
    <React.Fragment>
      <Route exact path="/" component={Forum} />
      <Route exact path="/admin" component={Admin} />
    </React.Fragment>
  );
};

export default Routes;
