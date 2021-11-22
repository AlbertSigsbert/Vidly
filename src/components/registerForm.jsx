import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class RegisterForm extends Form {
  state = {
    data: { firstname: "", lastname:"", email:"", password: "", confirmPassword:"" },
    errors: {},
  };

  schema = {
    firstname: Joi.string().required().label("First Name"),
    lastname: Joi.string().required().label("Last Name"),
    email:Joi.string().email().required().label("Email"),
    password: Joi.string().required().label("Password"),
    confirmPassword: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    //Call server
    console.log("Submitted");
  };

  render() {
   

    return (
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>

          {this.renderInput("username", "Username")}

          {this.renderInput("password", "Password", "password")}

          {this.renderBtn("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
