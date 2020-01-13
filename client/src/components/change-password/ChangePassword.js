import React, { Fragment } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";

const ChangePassword = () => {
  return (
    <Fragment>
      <div className="Signup">
        <form>
          <FormGroup controlId="currentPassword" size="lg">
            <FormControl
              // value={password}
              // onChange={onChange}
              type="password"
              placeholder="Current Password"
              required
              name="currentPassword"
              // defaultValue={currentPassword}
            />
          </FormGroup>
          <FormGroup controlId="newPassword" size="lg">
            <FormControl
              // value={password}
              // onChange={onChange}
              type="password"
              placeholder="New Password"
              required
              name="newPassword"
              // defaultValue={newPassword}
            />
          </FormGroup>
          <FormGroup controlId="confirmPassword" size="lg">
            <FormControl
              // value={password}
              // onChange={onChange}
              type="password"
              placeholder="Confirm Password"
              required
              name="confirmPassword"
              // defaultValue={confirmPassword}
            />
          </FormGroup>
          <Button
            block
            size="lg"
            // disabled={!(currentPassword && newPassword && confirmPassword)}
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
