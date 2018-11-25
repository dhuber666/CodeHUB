import React from "react";
import CreateTopicGroup from "./forms/CreateTopicGroup";
import CreateTopic from "./forms/CreateTopics";
import { Divider } from "semantic-ui-react";

const Admin = ({ handleSubmit, dispatch, topicGroups }) => {
  return (
    <React.Fragment>
      <CreateTopicGroup />
      <Divider />
      <CreateTopic />
    </React.Fragment>
  );
};

export default Admin;
