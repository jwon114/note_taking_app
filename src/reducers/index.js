import { combineReducers } from 'redux';
import toDoReducer from './app.js';

const rootReducer = combineReducers({
  toDoReducer,
});

export default rootReducer;
