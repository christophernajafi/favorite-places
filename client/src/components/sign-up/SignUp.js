import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import "./sign-up.css";
import { register } from "../../redux/reducers/authReducer";
import { alert } from "../../redux/reducers/alertReducer";
import { Link, Redirect } from "react-router-dom";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    const { name, email, password, confirmPassword } = this.state;
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      alert("Please enter all fields", "danger");
      console.log("Please enter all fields.");
    } else if (password !== confirmPassword) {
      alert("Passwords do not match", "danger");
      console.log("Password do not match.");
    } else {
      console.log(name, email, password, confirmPassword);
      register({
        name,
        email,
        password
      });
    }
  };

  if(isAuthenticated) {
    return <Redirect to="/" />;
  }

  render() {
    const { name, email, password, confirmPassword } = this.state;
    return (
      <div className="Signup">
        <form onSubmit={this.onSubmit}>
          {/* Facebook and Google OAuth */}
          {/* <Button
            block
            size="lg"
            // disabled={!validateForm()}
            type="submit"
          >
            Sign Up with Facebook
          </Button>
          <p />
          <Button
            block
            size="lg"
            // disabled={!validateForm()}
            type="submit"
          >
            Sign Up with Google
          </Button>
          <p />
          <div class="strike">
            <span>OR</span>
          </div>
          <p /> */}
          <FormGroup controlId="name" size="lg">
            <FormControl
              autoFocus
              type="text"
              // value={email}
              onChange={this.onChange}
              placeholder="Name"
              required
              name="name"
              defaultValue={name}
            />
          </FormGroup>
          <FormGroup controlId="email" size="lg">
            <FormControl
              autoFocus
              type="email"
              // value={email}
              onChange={this.onChange}
              placeholder="Email"
              required
              name="email"
              defaultValue={email}
            />
          </FormGroup>
          <FormGroup controlId="password" size="lg">
            <FormControl
              // value={password}
              onChange={this.onChange}
              type="password"
              placeholder="Password"
              required
              name="password"
              defaultValue={password}
            />
          </FormGroup>
          <FormGroup controlId="confirmPassword" size="lg">
            <FormControl
              // value={password}
              onChange={this.onChange}
              type="password"
              placeholder="Confirm Password"
              required
              name="confirmPassword"
              defaultValue={confirmPassword}
            />
          </FormGroup>
          <Button
            block
            size="lg"
            disabled={!(name && email && password && confirmPassword)}
            type="submit"
          >
            Sign Up
          </Button>
          <p className="my-1 text-center">
            Already have an account? <Link to="/log-in">Log In</Link>
          </p>
        </form>
      </div>
    );
  }
}

// remember to import propTypes
// SignUp.propTypes = {
//   setAlert: PropTypes.func.isRequired,
//   register: PropTypes.func.isRequired,
//   isAuthenticated: PropTypes.bool
// };

// const mapStateToProps = state => ({
//   isAuthenticated: state.auth.isAuthenticated
// });

export default SignUp;

// <div className="form-container">
//   <h1>
//     Account <span className="text-primary">Register</span>
//   </h1>
//   <form onSubmit={this.onSubmit}>
//     <div className="form-group">
//       <label htmlFor="name">Name</label>
//       <input
//         type="text"
//         name="name"
//         // value={name}
//         onChange={this.onChange}
//       />
//     </div>
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
//         minLength="6"
//       />
//     </div>
//     <div className="form-group">
//       <label htmlFor="password">Confirm Password</label>
//       <input
//         type="password"
//         name="password2"
//         // value={password2}
//         onChange={this.onChange}
//         required
//         minLength="6"
//       />
//     </div>
//     <input
//       type="submit"
//       value="Register"
//       className="btn btn-primary btn-block"
//     />
//   </form>
// </div>
