import React from "react";
import { Form } from "semantic-ui-react";

const CustomField = ({ input, label, ...rest }) => {
  return (
    <Form.Field>
      <label>{label}</label>
      <input {...input} {...rest} />
    </Form.Field>
  );
};

export default CustomField;
