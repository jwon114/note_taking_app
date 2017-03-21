import React, { Component } from 'react';
import { connect } from 'react-redux';
import { buttonPress } from '../actions/index';
import ToDoList from './ToDoList/ToDoList';
import Style from '../../style/style.css';
import ToDo from './ToDo/ToDo';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentToDo: '',
      listToDos: [{ title: 'A', value: 'One' }, { title: 'B', value: 'Two' }, { title: 'C', value: 'Three' }],
      showToDo: '',
    };
  }

  render() {
    const { reduxState, dispatch } = this.props;
    const { listToDos } = this.state;
    return (
      <div>
        <div>
          <input value={this.state.inputValue} onChange={(e) => this.setState({ inputValue: e.target.value })} />
          <button onClick={() => dispatch(buttonPress(this.state.inputValue))}>Button</button>
        </div>
        <div className={Style.container}>
          <div className={Style.toDos}>
            <ToDoList name={'First list'} list={listToDos} />
          </div>
          <div className={Style.listToDos}>
            {'hi'}
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
