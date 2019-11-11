import React from 'react'
import Todo from './Todo';
// * TodoList
const TodoList = ({state, dispatch}) => {
  const todos = state.map(item => {
    return (
      <Todo key={item.id} {...item} />
    );
  });

  return <div className="TodoList">{todos}</div>;
};

export default TodoList;