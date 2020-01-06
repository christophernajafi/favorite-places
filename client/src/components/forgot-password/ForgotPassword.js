import React, { useState } from "react";
// eslint-disable-next-line
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// eslint-disable-next-line
import PropTypes from "prop-types";
import { Button, FormGroup, FormControl } from "react-bootstrap";

const ForgotPassword = props => {
  const [email, setEmail] = useState(null);

  const onChange = event => {
    setEmail({ [event.target.name]: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();
    // eslint-disable-next-line
    props.history.push("/");
  };

  return (
    <div className="Login">
      <h1 className="text-center">Forgot Password</h1>
      <p className="my-1  text-center">
        Please enter your email address and we will send you an email about how
        to reset your password.
      </p>
      <form onSubmit={onSubmit}>
        <FormGroup controlId="email" size="lg">
          <FormControl
            autoFocus
            type="email"
            placeholder="Email"
            onChange={onChange}
            required
            name="email"
            defaultValue={email}
          />
        </FormGroup>

        <Button block size="lg" disabled={!email} type="submit">
          Reset Password
        </Button>
        <p className="my-1 text-center">
          Back to <Link to="/log-in">Log In</Link>
        </p>
      </form>
    </div>
  );
};

export default ForgotPassword;
