import React from "react";
import Input from "./common/input";

class LoginForm extends React.Component {
  state = {
    account: { username: "", password: "" },
    errors: {}
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  validate = () => {
     const errors = {};

     const {account} = this.state;

     if(account.username.trim() === '')
        errors.username = 'Username is required.';

     if(account.password.trim() === '')
        errors.password = 'Password is required.';

      return Object.keys(errors).length === 0 ? null : errors;
   
  }
  handleSubmit = (e) => {
    e.preventDefault();

    //Validate
    const errors = this.validate();
    console.log(errors);
    this.setState({ errors:errors || {} })

    if(errors) return;
    
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

          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
