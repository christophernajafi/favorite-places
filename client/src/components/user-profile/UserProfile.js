import React, { Fragment } from "react";
import { Button } from "react-bootstrap";

import NoProfilePic from "./no-profile-pic.jpg";

// eslint-disable-next-line
const UserProfile = props => {
  return (
    <Fragment>
      <div className="container">
        <div className="jumbotron">
          <p>
            <img
              src={NoProfilePic}
              className="rounded-circle"
              alt="Profile pic"
            ></img>
          </p>
          <p className="font-weight-bold">Name</p>
          <p className="font-weight-bold">Website</p>
          <p className="font-weight-bold">Bio</p>
          <p className="font-weight-bold">Email</p>
          <Button variant="primary" type="submit" href="/edit-profile">
            Edit Profile
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

export default UserProfile;
