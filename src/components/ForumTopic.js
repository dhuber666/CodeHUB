import React from "react";
import { List, Button } from "semantic-ui-react";

const styles = {
  latestTopic: {
    minWidth: 400
  }
};

const ForumTopic = ({ children, header, description }) => {
  return (
    <List.Item>
      <List.Content floated="right" style={styles.latestTopic}>
        <List.Header>Latest Topic:</List.Header>
        <List.Description>
          [Diskussion] Der ideale asdf Gaming-PC er ideale asdf Gamin(1...
        </List.Description>
      </List.Content>
      <List.Icon color="teal" name="chat" size="large" verticalAlign="middle" />
      <List.Content>
        <List.Header as="a">{children}</List.Header>
        <List.Description as="a">{description}</List.Description>
      </List.Content>
    </List.Item>
  );
};

export default ForumTopic;