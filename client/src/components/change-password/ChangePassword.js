import React, { Fragment, useState } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import { toast } from "react-toastify";

const ChangePassword = () => {
  const [formState, setFormState] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: ""
  });

  // eslint-disable-next-line
  const { currentPassword, newPassword, confirmNewPassword } = formState;

  const handleChange = event => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (newPassword !== confirmNewPassword) {
      toast.warn("Your new password and confirmation password do not match.", {
        position: toast.POSITION.TOP_RIGHT
      });
    }
    // console.log("formState: ", formState);
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
              // defaultValue={currentPassword}
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
              // defaultValue={newPassword}
            />
          </FormGroup>
          <FormGroup controlId="confirmNewPassword" size="lg">
            <FormControl
              value={confirmNewPassword}
              onChange={handleChange}
              type="password"
              placeholder="Confirm New Password"
              required
              name="confirmNewPassword"
              // defaultValue={confirmNewPassword}
            />
          </FormGroup>
          <Button
            block
            size="lg"
            disabled={!(currentPassword && newPassword && confirmNewPassword)}
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
