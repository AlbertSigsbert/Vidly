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
    email:Joi.string().email({ minDomainAtoms: 2 }).required().label("Email"),
    password: Joi.string().min(5).required().label("Password"),
    confirmPassword: Joi.any().valid(Joi.ref('password')).required().options({ language: { any: { allowOnly: 'must match password' } } })
  };

  doSubmit = () => {
    //Call server
    console.log("Submitted");
  };

  render() {
   

    return (
      <div className="container">
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>

          {this.renderInput("firstname", "First Name")}
          {this.renderInput("lastname", "Last Name")}
          {this.renderInput("email", "Email", "email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("confirmPassword", "Confirm Password", "password")}

          {this.renderBtn("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
