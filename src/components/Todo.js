import React from 'react';

const Todo = ({id, text, completed}) => {
  return (
    <div id={id} className={'Todo'.concat(completed ? '-done' : '')}>
        <p>{text}</p>
      </div>
  )
}

export default Todo;