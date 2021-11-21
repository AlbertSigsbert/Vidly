import React from "react";
import Joi from "joi-browser";
import Input from "./common/input";

class LoginForm extends React.Component {
  state = {
    account: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label('Username'),
    password: Joi.string().required().label('Password'),
  };


  validateProperty = ({ name, value }) => {
     const inputObj = {[name] : value};
     const schema = { [name] : this.schema[name]}
     const {error} = Joi.validate(inputObj, schema);
    
     return error ? error.details[0].message : null;
  }

  handleChange = ({ currentTarget: input }) => {
    //Validate specific Input
    const errors = {...this.state.errors};
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else  delete errors[input.name];
     
    //Set values to state
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account , errors });
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.account, this.schema, options);

    if (!error) return null;

    const errors = {};

    for (const item of error.details) {
      errors[item.path[0]] = item.message;
    }

    return errors;
  };


  handleSubmit = (e) => {
    e.preventDefault();

    //Validate
    const errors = this.validate();
    console.log(errors);
    this.setState({ errors: errors || {} });

    if (errors) return;

    //Call server
    console.log("Submitted");
  };

  render() {
    const { account, errors } = this.state;

    return (
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            label="Username"
            value={account.username}
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            name="password"
            label="Password"
            value={account.password}
            onChange={this.handleChange}
            error={errors.password}
          />

          <button disabled={ this.validate() } type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;