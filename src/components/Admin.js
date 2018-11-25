import React from "react";
import CreateTopicGroup from "./forms/CreateTopicGroup";
import CreateTopic from "./forms/CreateTopics";

const Admin = ({ handleSubmit, dispatch, topicGroups }) => {
  return (
    <React.Fragment>
      <CreateTopicGroup />
      <CreateTopic />
    </React.Fragment>
  );
};

export default Admin;
