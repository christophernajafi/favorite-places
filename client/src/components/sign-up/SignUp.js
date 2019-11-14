import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./sign-up.css";

class SignUp extends Component {
  // const [user, setUser] = useState({
  // 	name: "",
  // 	email: "",
  // 	password: "",
  // 	password2: ""
  // });

  onChange = e => {
    //
  };

  onSubmit = e => {
    e.preventDefault();
    // if (name === "" || email === "" || password === "") {
    // 	setAlert("Please enter all fields", "danger");
    // } else if (password !== password2) {
    // 	setAlert("Passwords do not match", "danger");
    // } else {
    // 	register({
    // 		name,
    // 		email,
    // 		password
    // 	});
    // }
  };

  render() {
    return (
      <div className="Signup">
        <form onSubmit={this.onSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <FormLabel>Name</FormLabel>
            <FormControl
              autoFocus
              type="email"
              // value={email}
              onChange={this.onChange}
            />
          </FormGroup>
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
          <FormGroup controlId="password" bsSize="large">
            <FormLabel>Confirm Password</FormLabel>
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
            Sign Up
          </Button>
        </form>
      </div>
    );
  }
}

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
