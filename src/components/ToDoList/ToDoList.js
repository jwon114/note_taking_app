import React, { PropTypes } from 'react';

const ToDoList = (props) => (
  <div>
    {props.name}
    {props.list.map((value) => (
      <li onClick={() => props.clickToDo(value)}>
        {value.title}
      </li>)
    )}
  </div>
);

ToDoList.propTypes = {
  name: PropTypes.string,
  list: PropTypes.array,
  clickToDo: PropTypes.func,
};

export default ToDoList;
