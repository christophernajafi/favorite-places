import React, { Fragment, useState } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";

const ChangePassword = () => {
  const [formState, setFormState] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const handleChange = event => {
    setFormState({
      ...formState,
      [event.target.name]: [event.target.value]
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    // console.log(formState);
  };

  return (
    <Fragment>
      <div className="Signup">
        <form onSubmit={handleSubmit}>
          <FormGroup controlId="currentPassword" size="lg">
            <FormControl
              value={formState.currentPassword}
              onChange={handleChange}
              type="password"
              placeholder="Current Password"
              required
              name="currentPassword"
              // defaultValue={formState.currentPassword}
            />
          </FormGroup>
          <FormGroup controlId="newPassword" size="lg">
            <FormControl
              value={formState.newPassword}
              onChange={handleChange}
              type="password"
              placeholder="New Password"
              required
              name="newPassword"
              // defaultValue={formState.newPassword}
            />
          </FormGroup>
          <FormGroup controlId="confirmPassword" size="lg">
            <FormControl
              value={formState.confirmPassword}
              onChange={handleChange}
              type="password"
              placeholder="Confirm Password"
              required
              name="confirmPassword"
              // defaultValue={formState.confirmPassword}
            />
          </FormGroup>
          <Button
            block
            size="lg"
            disabled={
              !(
                formState.currentPassword &&
                formState.newPassword &&
                formState.confirmPassword
              )
            }
            type="submit"
          >
            Change Password
          </Button>
        </form>
      </div>
    </Fragment>
  );
};

export default ChangePassword;
