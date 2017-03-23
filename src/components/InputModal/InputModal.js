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
        <div className="input-group">
          <span className="input-group-addon" id="basic-addon1">@</span>
          <input type="text" className="form-control" placeholder="Username" aria-describedby="basic-addon1" />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-default" onClick={() => props.hide()}>Close</button>
        <button className="btn btn-default">Submit</button>
        <button className="btn btn-default">Clear</button>
      </Modal.Footer>
    </Modal>
  </div>
);

export default InputModal;
