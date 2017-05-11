
import React, { Component } from 'react';
import { connect } from 'react-redux';
import addToDo from '../actions/index';
import ToDoList from './ToDoList/ToDoList';
import Style from '../../style/style.css';
import ToDo from './ToDo/ToDo';
import InputModal from './InputModal/InputModal';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listToDos: [{ title: 'A', value: 'One' }, { title: 'B', value: 'Two' }, { title: 'C', value: 'Three' }],
      showToDo: '',
      showModal: false,
    };
  }

  closeModal() {
    this.setState({ showModal: false });
  }

  deleteItem() {
    this.setState({ listToDos: this.state.listToDos.filter((item) => item !== this.state.showToDo), showToDo: '' });
  }

  render() {
    const { reduxState, dispatch } = this.props;
    const { listToDos, showToDo, showModal } = this.state;
    return (
      <div>
        {console.log(this.state)}
        <div>
          <button onClick={() => this.setState({ showModal: true })}>New ToDo</button>
          <InputModal show={showModal} hide={() => this.closeModal()} input={(input) => this.setState({ listToDos: [...listToDos, input] })} />
        </div>
        <div className={Style.container}>
          <div className={Style.toDos}>
            <ToDoList name={'First list'} list={listToDos} clickToDo={(toDo) => this.setState({ showToDo: toDo })} />
          </div>
          <div className={Style.listToDos}>
            {showToDo ? <ToDo item={showToDo} deleteToDo={() => this.deleteItem()} /> : null}
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
