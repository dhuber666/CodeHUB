import React, { Fragment } from "react";

import { connect } from "react-redux";
import ForumTopicGroup from "./ForumTopicGroup";
import { fetchTopicGroups } from "../actions";

class Forum extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchTopicGroups());
  }

  renderTopicGroups() {
    const { topicGroups } = this.props;

    return topicGroups.map(topicGroup => (
      <ForumTopicGroup
        key={topicGroup._id}
        title={topicGroup.title}
        subTitle={topicGroup.subTitle}
      />
    ));
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
