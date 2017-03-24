import React, { Component, PropTypes } from 'react';
import { Modal, FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';

export default class InputModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input: '',
      title: '',
    };
  }

  validationState() {

  }

  fieldGroup({ id, label, help, ...props }) {
    return (
      <FormGroup
        controlId="formTitleText"
      >
        <ControlLabel>{label}</ControlLabel>
        <FormControl
          type="text"
          value={this.state.input}
          placeholder="Enter Title"
          onChange={(e) => this.setState({ input: e.target.value })}
        />
      </FormGroup>
    );
  }

  render() {
    return (
      <div>
        {console.log('InputModal', this.state)}
        <Modal show={this.props.show} onHide={() => this.props.hide()}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <FormGroup
                controlId="formTitleText"
              >
                <ControlLabel>Title</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.input}
                  placeholder="Enter Title"
                  onChange={(e) => this.setState({ input: e.target.value })}
                />
              </FormGroup>
              <FormGroup
                controlId="formToDoText"
                validationState={this.validationState()}
              >
                <ControlLabel>To Do</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.input}
                  placeholder="Enter Text"
                  onChange={(e) => this.setState({ input: e.target.value })}
                />
                <HelpBlock>Max 200 characters</HelpBlock>
              </FormGroup>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-default" onClick={() => this.props.hide()}>Close</button>
            <button className="btn btn-default">Submit</button>
            <button className="btn btn-default" onClick={() => this.setState({ input: '' })}>Clear</button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

InputModal.propTypes = {
  show: PropTypes.boolean,
  hide: PropTypes.func,
  value: PropTypes.string,
};
