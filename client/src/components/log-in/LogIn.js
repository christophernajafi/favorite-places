import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { login } from "../../redux/reducers/authReducer";
import { setAlert } from "../../redux/reducers/alertReducer";
import "./log-in.css";

// convert to functional component with hooks

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
    const { login } = this.props;
    if (email === "" || password === "") {
      setAlert("Please fill in all fields", "danger");
    } else {
      login(email, password);
      // this.props.history.push("/");
      // if (this.props.isAuthenticated) {
      //   this.props.history.push("/");
      // }
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

          <p className="my-1 text-center">
            <Link to="/password-reset">Forgot password?</Link>
          </p>
          <p className="my-1 text-center">
            Don't have an account? <Link to="/sign-up">Sign Up</Link>
          </p>
        </form>
      </div>
    );
  }
}

/**
 * PROP TYPES
 */
LogIn.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(LogIn);

// export default LogIn;

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
