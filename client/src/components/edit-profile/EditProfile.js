import React, { Fragment } from "react";
import { Button, Form } from "react-bootstrap";

import ImageUpload from "../image-upload/ImageUpload";

const EditProfile = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="jumbotron">
          <div>
            <p>
              <ImageUpload />
            </p>
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

            <Button variant="primary" type="submit">
              Save
            </Button>
            <Button variant="secondary" type="submit">
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditProfile;
