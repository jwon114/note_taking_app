import React, { Component } from 'react';
import { connect } from 'react-redux';
import addToDo from '../actions/index';
import ToDoList from './ToDoList/ToDoList';
import Style from '../../style/style.css';
import ToDo from './ToDo/ToDo';
import InputModal from './InputModal/InputModal';
//import { Modal } from 'react-bootstrap';

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

  closeModal() {
    this.setState({ showModal: false });
  }

  render() {
    const { reduxState, dispatch } = this.props;
    const { listToDos, showToDo, showModal } = this.state;
    return (
      <div>
        {console.log(this.state)}
        <div>
          <button onClick={() => this.setState({ showModal: true })}>New ToDo</button>
          <InputModal show={showModal} hide={() => this.closeModal()} />
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
