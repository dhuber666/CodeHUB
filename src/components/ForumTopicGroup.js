import React from "react";
import { Fragment } from "react";

import { Segment, List } from "semantic-ui-react";

/*
    This Component takes in a ForumTopic and styles it accordingly
    It also takes in a title, how it should be displayed

*/

const ForumTopicGroup = ({ children, title, color }) => {
  return (
    <Fragment>
      <Segment.Group>
        <Segment color={color || "teal"} inverted>
          {title}
        </Segment>
        <Segment>
          <List relaxed divided>
            {children}
          </List>
        </Segment>
      </Segment.Group>
    </Fragment>
  );
};

export default ForumTopicGroup;
