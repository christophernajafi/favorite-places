import React, { Component } from "react";
import { connect } from "react-redux";

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  onChange = e => {
    // setUser({ ...user, [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
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
      <div className="form-container">
        <h1>
          Account <span className="text-primary">Login</span>
        </h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              // value={email}
              onChange={this.onChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              // value={password}
              onChange={this.onChange}
              required
            />
          </div>
          <input
            type="submit"
            value="Login"
            className="btn btn-primary btn-block"
          />
        </form>
      </div>
    );
  }
}

export default connect(null)(LogIn);
