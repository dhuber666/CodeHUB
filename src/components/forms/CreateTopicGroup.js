import React from "react";
import { createTopicGroup } from "../../actions";

import { connect } from "react-redux";

import { Field, reduxForm } from "redux-form";

import { Form, Button } from "semantic-ui-react";
import InputField from "../CustomField";

const CreateTopicGroup = ({ handleSubmit, dispatch, topicGroups }) => {
  const submitTopicGroup = ({ topicGroupTitle, topicGroupSubTitle }) => {
    console.log(topicGroupSubTitle, topicGroupTitle);
    dispatch(createTopicGroup(topicGroupTitle, topicGroupSubTitle));
  };

  return (
    <Form onSubmit={handleSubmit(submitTopicGroup)}>
      <label>Create Topic Group Title:</label>
      <Field
        name="topicGroupTitle"
        component={InputField}
        placeholder="e.g. FAQ, Coding Partner Search, ..."
      />
      <label>Create Topic Group Sub-Title:</label>
      <Field
        name="topicGroupSubTitle"
        component={InputField}
        placeholder="e.g. General discussion about Languages"
      />

      <Form.Field control={Button} primary type="submit">
        Create Topic Group
      </Form.Field>
    </Form>
  );
};

const mapStateToProps = state => {
  return {
    topicGroups: state.topicGroups
  };
};

const withForm = reduxForm({
  form: "topicGroupsForm" // a unique identifier for this form
})(CreateTopicGroup);

export default connect(
  mapStateToProps,
  null
)(withForm);
