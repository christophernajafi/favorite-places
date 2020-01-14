import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const PrivacyAndSecurity = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="jumbotron">
          <h4>Two-Factor Authentication</h4>
          <p>Edit Two-Factor Authentication Setting</p>
          <p className="my-1 text-center">
            Back to <Link to="/settings">Settings</Link>
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default PrivacyAndSecurity;
