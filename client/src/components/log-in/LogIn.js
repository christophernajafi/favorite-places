import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import "./log-in.css";
import { login } from "../../redux/reducers/authReducer";
import { alert } from "../../redux/reducers/alertReducer";

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    if (email === "" || password === "") {
      alert("Please fill in all fields", "danger");
      console.log("Please fill in all fields");
    } else {
      login({
        email,
        password
      });
      console.log(email + ", " + password);
    }
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="Login">
        <form onSubmit={this.onSubmit}>
          <FormGroup controlId="email" size="lg">
            <FormControl
              autoFocus
              type="email"
              placeholder="Email"
              onChange={this.onChange}
              required
              name="email"
              defaultValue={email}
            />
          </FormGroup>
          <FormGroup controlId="password" size="lg">
            <FormControl
              placeholder="Password"
              onChange={this.onChange}
              type="password"
              required
              name="password"
              defaultValue={password}
            />
          </FormGroup>
          <Button block size="lg" disabled={!(email && password)} type="submit">
            Log In
          </Button>
        </form>
      </div>
    );
  }
}

export default LogIn;

// <div className="form-container">
//   <h1>
//     Account <span className="text-primary">Login</span>
//   </h1>
//   <form onSubmit={this.onSubmit}>
//     <div className="form-group">
//       <label htmlFor="email">Email Address</label>
//       <input
//         type="email"
//         name="email"
//         // value={email}
//         onChange={this.onChange}
//         required
//       />
//     </div>
//     <div className="form-group">
//       <label htmlFor="password">Password</label>
//       <input
//         type="password"
//         name="password"
//         // value={password}
//         onChange={this.onChange}
//         required
//       />
//     </div>
//     <input
//       type="submit"
//       value="Login"
//       className="btn btn-primary btn-block"
//     />
//   </form>
// </div>
