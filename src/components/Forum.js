import React, { Fragment } from "react";

import { connect } from "react-redux";
import ForumTopicGroup from "./ForumTopicGroup";
import ForumTopic from "./ForumTopic";
import { fetchTopicGroups } from "../actions";

class Forum extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchTopicGroups());
  }

  renderTopicGroups() {
    const { topicGroups } = this.props;

    return topicGroups.map(topicGroup => {
      return (
        <ForumTopicGroup key={topicGroup._id} title={topicGroup.title}>
          {topicGroup.topics.map(topic => {
            return (
              <ForumTopic
                key={topic._id}
                subTitle={topic.subTitle}
                id={topic._id}
              >
                {topic.title}
              </ForumTopic>
            );
          })}
        </ForumTopicGroup>
      );
    });
  }

  render() {
    return <Fragment>{this.renderTopicGroups()}</Fragment>;
  }
}

const mapStateToProps = state => {
  return { topicGroups: state.topicGroups };
};

export default connect(
  mapStateToProps,
  null
)(Forum);
