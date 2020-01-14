import React, { Fragment } from "react";
import { Button, Form } from "react-bootstrap";

import ImageUpload from "../image-upload/ImageUpload";

const EditProfile = props => {
  const save = () => {
    // eslint-disable-next-line
    props.history.push("/settings");
    // save should push to the view profile page
  };

  const cancel = () => {
    // eslint-disable-next-line
    props.history.push("/settings");
  };

  return (
    <Fragment>
      <div className="container">
        <div className="jumbotron">
          <ImageUpload />
          <p />
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
          <Form.Group controlId="website">
            <Form.Label>Website</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
          <Form.Group controlId="bio">
            <Form.Label>Bio</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="" />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={save}>
            Save
          </Button>
          <Button variant="secondary" type="submit" onClick={cancel}>
            Cancel
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

export default EditProfile;
