import React from "react";
import Joi from "joi-browser";
import Input from "./input";

class Form extends React.Component {
  state = {
    data: {},
    errors: {},
  };

  handleChange = ({ currentTarget: input }) => {
    //Validate specific Input
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    //Set values to state
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);

    if (!error) return null;

    const errors = {};

    for (const item of error.details) {
      errors[item.path[0]] = item.message;
    }

    return errors;
  };

  validateProperty = ({ name, value }) => {
    const inputObj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(inputObj, schema);

    return error ? error.details[0].message : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    //Validate
    const errors = this.validate();

    this.setState({ errors: errors || {} });

    if (errors) return;

    this.doSubmit();
  };

  renderBtn = (label) => {
    return (
      <button
        disabled={this.validate()}
        type="submit"
        className="btn btn-primary"
      >
        {label}
      </button>
    );
  };

  renderInput = (name, label, type = "text") => {
    const { data, errors } = this.state;
    return (
      <Input
        type={type}
        name={name}
        label={label}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  };
}

export default Form;
