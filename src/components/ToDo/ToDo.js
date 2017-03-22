import React from 'react';

const ToDo = (props) => (
  <div>
    {props.item.title}
    {props.item.value}
  </div>
);

export default ToDo;
