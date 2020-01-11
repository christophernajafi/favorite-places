import React from "react";
// eslint-disable-next-line
import { Modal, Button, Form } from "react-bootstrap";

const CreateListModal = props => {
  // eslint-disable-next-line
  const { show, onHide, handleClose } = props;

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header>
        <Modal.Title>Create List</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="formBasicText">
          <Form.Label>List Name</Form.Label>
          <Form.Control type="text" placeholder="Enter list name" />
        </Form.Group>
        <Form.Group controlId="formBasicText">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Enter a description" />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="submit" onClick={onHide}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateListModal;
