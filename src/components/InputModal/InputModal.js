import React from 'react';
import { Modal } from 'react-bootstrap';

const InputModal = (props) => (
  <div>
    <Modal show={props.show} onHide={() => props.hide()}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input />
      </Modal.Body>
      <Modal.Footer>
        <button onClick={() => props.hide()}>Close</button>
        <button>Submit</button>
        <button>Clear</button>
      </Modal.Footer>
    </Modal>
  </div>
);

export default InputModal;
