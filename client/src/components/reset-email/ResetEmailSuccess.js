import React from "react";

const ResetEmailSuccess = () => {
  const emailAddress = "";
  return (
    <div>
      <p>
        You will receive a message at {emailAddress} if you’ve registered your
        account with that email address.
      </p>
      <p>
        Please check for an email from Favorite Places and click on the included
        link to reset your password.
      </p>
    </div>
  );
};

export default ResetEmailSuccess;
