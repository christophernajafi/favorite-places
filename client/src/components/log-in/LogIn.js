import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./log-in.css";

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  onChange = event => {
    // setUser({ ...user, [e.target.name]: e.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    // if (email === "" || password === "") {
    //   setAlert("Please fill in all fields", "danger");
    // } else {
    //   login({
    //     email,
    //     password
    //   });
    // }
  };

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.onSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <FormLabel>Email</FormLabel>
            <FormControl
              autoFocus
              type="email"
              // value={email}
              onChange={this.onChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <FormLabel>Password</FormLabel>
            <FormControl
              // value={password}
              onChange={this.onChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            // disabled={!validateForm()}
            type="submit"
          >
            Log In
          </Button>
        </form>
      </div>
    );
  }
}

export default connect(null)(LogIn);

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
