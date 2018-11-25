import { BrowserRouter as Router, Route } from "react-router-dom";
import Forum from "../components/Forum";
import Admin from "../components/Admin";
import ForumTopicDetail from "../components/ForumTopicDetail";
import React from "react";

const Routes = () => {
  return (
    <React.Fragment>
      <Route exact path="/" component={Forum} />
      <Route exact path="/admin" component={Admin} />
      <Route path="/detail/:forumTopicDetailID" component={ForumTopicDetail} />
    </React.Fragment>
  );
};

export default Routes;
