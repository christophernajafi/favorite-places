import React, { Fragment } from "react";

/*
Not authenticated should be redirected to log in page
*/

const Settings = () => {
  return (
    <Fragment>
      <div className="jumbotron">
        Settings
        <br />
        Edit Profile
        <br />
        Change Password
      </div>
    </Fragment>
  );
};

export default Settings;
