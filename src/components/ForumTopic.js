import React from "react";
import { List } from "semantic-ui-react";
import { Link } from "react-router-dom";

const styles = {
  latestTopic: {
    minWidth: 400
  }
};

const ForumTopic = ({ children, subTitle, id }) => {
  return (
    <List.Item
      as={Link}
      to={{ pathname: `/detail/${id}`, query: { topicID: id } }}
    >
      <List.Icon color="teal" name="chat" size="large" verticalAlign="middle" />
      <List.Content>
        <List.Header>{children}</List.Header>
        <List.Description>{subTitle}</List.Description>
      </List.Content>
    </List.Item>
  );
};

export default ForumTopic;
