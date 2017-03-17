import React, { Component } from 'react';
import { connect } from 'react-redux';
import { buttonPress } from '../actions/index';
import ToDoList from './ToDoList/ToDoList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      initialMessage: 'greeting',
      inputValue: '',
    };
  }

  render() {
    const { reduxState, dispatch } = this.props;
    return (
      <div>
        <h1>{reduxState.message}</h1>
        <input value={this.state.inputValue} onChange={(e) => this.setState({ inputValue: e.target.value })} />
        <button onClick={() => dispatch(buttonPress(this.state.inputValue))}>Button</button>
        <ToDoList name={'First list'} list={[1, 2, 3]} />
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
