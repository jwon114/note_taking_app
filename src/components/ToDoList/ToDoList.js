import React, { PropTypes } from 'react';

const ToDoList = (props) => (
  <div>
    {props.name}
    {props.list.map((value) => (
      <div onClick={props.click}>
        {value.title}
      </div>)
    )}
  </div>
);

ToDoList.propTypes = {
  name: PropTypes.string,
  list: PropTypes.array,
  click: PropTypes.func,
};

export default ToDoList;
