import React from "react";

import { createTopic } from "../../actions";

import { connect } from "react-redux";

import { Field, reduxForm } from "redux-form";

import { Form, Button } from "semantic-ui-react";
import InputField from "../CustomField";

const CreateTopics = ({ handleSubmit, dispatch, topicGroups }) => {
  const submitTopic = ({ topicGroupId, topicTitle, topicSubTitle }) => {
    dispatch(createTopic(topicGroupId, topicTitle, topicSubTitle));
  };

  return (
    <Form onSubmit={handleSubmit(submitTopic)}>
      <label>Create Topic Title:</label>
      <Field
        name="topicTitle"
        component={InputField}
        placeholder="e.g. Javascript, C#"
      />
      <label>Create Topic Sub-Title:</label>
      <Field
        name="topicSubTitle"
        component={InputField}
        placeholder="e.g. Everything about JS or C#"
      />
      <label>Chose a related Topic Group</label>
      <Field name="topicGroupId" component="select">
        <option value="" />
        {topicGroups.map(topicGroup => {
          return (
            <option key={topicGroup._id} value={topicGroup._id}>
              {topicGroup.title}
            </option>
          );
        })}
      </Field>

      <Form.Field control={Button} primary type="submit">
        Create Topic
      </Form.Field>
    </Form>
  );
};

const mapStateToProps = state => {
  return {
    topicGroups: state.topicGroups
  };
};
const withRedux = connect(
  mapStateToProps,
  null
)(CreateTopics);

export default reduxForm({
  form: "topicsForm" // a unique identifier for this form
})(withRedux);
