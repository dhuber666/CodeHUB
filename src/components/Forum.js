import React, { Fragment } from "react";
import _ from "lodash";

import ForumTopicGroup from "./ForumTopicGroup";
import ForumTopic from "./ForumTopic";

import data from "../utils/mockData";

/*

    <ForumTopicGroup title="Languages">
          <ForumTopic description="Everything about Vanilly JS">
            Javacript
          </ForumTopic>
          <ForumTopic description="Microsoft's go to language">C#</ForumTopic>
          <ForumTopic description="Python and it's economy">Python</ForumTopic>
        </ForumTopicGroup>
        <ForumTopicGroup title="Coding Partner Search">
          <ForumTopic description="Everything about Vanilly JS">
            Javacript
          </ForumTopic>
          <ForumTopic description="Microsoft's go to language">C#</ForumTopic>
          <ForumTopic description="Python and it's economy">Python</ForumTopic>
        </ForumTopicGroup>

*/

class Forum extends React.Component {
  state = {
    topicGroups: null
  };

  componentDidMount() {
    this.setState({
      topicGroups: data.topicGroups,
      topics: data.topics
    });
  }

  /*
  <ForumTopicGroup title={topicGroup.title}>
            <ForumTopic>{topic.title}</ForumTopic>
          </ForumTopicGroup> */

  renderTopicGroups() {
    const { topicGroups, topics } = this.state;

    const groups = _.values(topicGroups);
    const topicsValues = _.values(topics);

    console.log(topics);
    if (topicGroups) {
      return Object.entries(topicGroups).map(([groupKey, group]) =>
        Object.entries(group.topics).map(([topicKey, topic]) => {
          return (
            <ForumTopicGroup title={group.title}>
              <ForumTopic>{topic.title}</ForumTopic>
            </ForumTopicGroup>
          );
        })
      );
    }
  }

  render() {
    return <Fragment>{this.renderTopicGroups()}</Fragment>;
  }
}

export default Forum;
