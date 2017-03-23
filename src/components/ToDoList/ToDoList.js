import React, { PropTypes } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const ToDoList = (props) => (
  <div>
    {props.name}
    {props.list.map((value) => (
      <ListGroup>
        <ListGroupItem onClick={() => props.clickToDo(value)}>{value.title}</ListGroupItem>
      </ListGroup>
    ))}
  </div>
);

ToDoList.propTypes = {
  name: PropTypes.string,
  list: PropTypes.array,
  clickToDo: PropTypes.func,
};

export default ToDoList;
