import React, {useContext} from 'react';
import {TodoContext} from '../contexts';

const Todo = ({id, text, completed}) => {
  const {dispatch} = useContext(TodoContext);

  return (
    <div id={id} className={'Todo'.concat(completed ? ' done' : '')} onClick={() => dispatch({type: 'COMPLETE_TODO', payload: id})}>
        <p>{text}</p>
      </div>
  )
}

export default Todo;