import React, {useContext} from 'react'
import Todo from './Todo';
import {TodoContext} from '../contexts';
// * TodoList
const TodoList = () => {
  const {state} = useContext(TodoContext);
  const todos = state.map(item => {
    return (
      <Todo key={item.id} {...item} />
    );
  });

  return <div className="TodoList">{todos}</div>;
};

export default TodoList;