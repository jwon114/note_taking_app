import React from 'react';

const ToDoList = (props) => (
  <div>
    {props.name}
    {props.list.map((value, key) => (
      <div>
        {value[key]}
      </div>)
    )}
  </div>
);

export default ToDoList;
