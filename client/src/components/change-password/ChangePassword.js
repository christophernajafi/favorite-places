import React, { Fragment, useState } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";

const ChangePassword = () => {
  // eslint-disable-next-line
  const [currentPassword, setCurrentPassword] = useState(null);
  // eslint-disable-next-line
  const [newPassword, setNewPassword] = useState(null);
  // eslint-disable-next-line
  const [confirmPassword, setConfirmPassword] = useState(null);

  // eslint-disable-next-line
  const handleChange = event => {};

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <Fragment>
      <div className="Signup">
        <form onSubmit={handleSubmit}>
          <FormGroup controlId="currentPassword" size="lg">
            <FormControl
              value={currentPassword}
              onChange={handleChange}
              type="password"
              placeholder="Current Password"
              required
              name="currentPassword"
              defaultValue={currentPassword}
            />
          </FormGroup>
          <FormGroup controlId="newPassword" size="lg">
            <FormControl
              value={newPassword}
              onChange={handleChange}
              type="password"
              placeholder="New Password"
              required
              name="newPassword"
              defaultValue={newPassword}
            />
          </FormGroup>
          <FormGroup controlId="confirmPassword" size="lg">
            <FormControl
              value={confirmPassword}
              onChange={handleChange}
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
            disabled={!(currentPassword && newPassword && confirmPassword)}
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
