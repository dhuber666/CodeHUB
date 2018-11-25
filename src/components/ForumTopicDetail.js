import React from "react";
import { connect } from "react-redux";
import { fetchTopics } from "../actions";
import ForumTopicGroup from "./ForumTopicGroup";
import ForumTopic from "./ForumTopic";

class ForumTopicDetail extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchTopics());
  }

  render() {
    const { topic } = this.props;
    // TODO: Add functionality to add new posts to a topic and display them. Find out how to Link to a post detail

    if (topic) {
      return (
        <ForumTopicGroup title={topic.title}>
          <ForumTopic>All posts here</ForumTopic>
        </ForumTopicGroup>
      );
    }

    return <h2>Loading</h2>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    topic: state.topics.find(
      topic => topic._id === ownProps.match.params.forumTopicDetailID
    )
  };
};

export default connect(
  mapStateToProps,
  null
)(ForumTopicDetail);
