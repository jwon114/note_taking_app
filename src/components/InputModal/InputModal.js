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

  fieldGroup({ id, validation, label, help, ...props }) {
    return (
      <FormGroup
        controlId={id}
        validationState={validation}
      >
        <ControlLabel>{label}</ControlLabel>
        <FormControl
          type="text"
          {...props}
        />
        {help && <HelpBlock>{help}</HelpBlock>}
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
              <this.fieldGroup
                id={'formTitleText'}
                label={'Title'}
                placeholder={'Enter Title'}
                value={this.state.title}
                onChange={(e) => this.setState({ title: e.target.value })}
              />
              <this.fieldGroup
                id={'formToDoText'}
                validation={this.validationState()}
                label={'To Do'}
                placeholder={'Enter Text'}
                value={this.state.input}
                onChange={(e) => this.setState({ input: e.target.value })}
                help={'Max 200 Characters'}
              />
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
