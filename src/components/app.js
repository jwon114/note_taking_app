import React, { Component } from 'react';
import { connect } from 'react-redux';
import addToDo from '../actions/index';
import ToDoList from './ToDoList/ToDoList';
import Style from '../../style/style.css';
import ToDo from './ToDo/ToDo';
import Modal from 'react-bootstrap';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      listToDos: [{ title: 'A', value: 'One' }, { title: 'B', value: 'Two' }, { title: 'C', value: 'Three' }],
      showToDo: '',
      showModal: false,
    };
  }

  render() {
    const { reduxState, dispatch } = this.props;
    const { listToDos, showToDo, showModal } = this.state;
    return (
      <div>
        {console.log(this.state)}
        <div>
          <button onClick={() => this.setState({ showPopUp: true })}>New ToDo</button>
        </div>
        <div>
          <Modal show={showModal} onHide={this.setState({ showModal: false })}>
            <Modal.Header closeButton>
              <Modal.Title>Modal Heading</Modal.Title>
            </Modal.Header>
          </Modal>
        </div>
        <div className={Style.container}>
          <div className={Style.toDos}>
            <ToDoList name={'First list'} list={listToDos} clickToDo={(toDo) => this.setState({ showToDo: toDo })} />
          </div>
          <div className={Style.listToDos}>
            {showToDo ? <ToDo item={showToDo} /> : null}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    reduxState: state.messageReducer,
  };
}

export default connect(mapStateToProps)(App);
