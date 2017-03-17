import React from 'react';

const ToDoList = (props) => (
  <div>
    {props.name}
    {props.list.map(a => (<div>{a}</div>))}
  </div>
);

export default ToDoList;
