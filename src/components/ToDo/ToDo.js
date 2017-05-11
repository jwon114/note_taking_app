import React, { PropTypes } from 'react';

const ToDo = (props) => (
  <div>
    <div>
      {props.item.title}
      {props.item.value}
    </div>
    <div>
      <button onClick={() => props.deleteToDo()}>Delete</button>
      <button>Edit</button>
    </div>
  </div>
);

ToDo.propTypes = {
  item: PropTypes.object,
  deleteToDo: PropTypes.func,
};

export default ToDo;
