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
      inputValue: '',
      listToDos: [{ title: 'A', value: 'One' }, { title: 'B', value: 'Two' }, { title: 'C', value: 'Three' }],
      showToDo: '',
    };
  }

  render() {
    const { reduxState, dispatch } = this.props;
    const { listToDos, showToDo } = this.state;
    return (
      <div>
        {console.log(this.state)}
        <div className={Style.container}>
          <div className={Style.toDos}>
            <ToDoList name={'First list'} list={listToDos} clickToDo={(toDo) => this.setState({ showToDo: toDo })} />
          </div>
          <div className={Style.listToDos}>
            {showToDo ? <ToDo item={showToDo} /> : null}
          </div>
        </div>
        <div>
          <input value={this.state.inputValue} onChange={(e) => this.setState({ inputValue: e.target.value })} />
          <button onClick={() => dispatch(buttonPress(this.state.inputValue))}>New ToDo</button>
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
