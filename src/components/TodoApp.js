import React, {useContext, useReducer} from 'react';

import EnchancedTodoForm from './EnchancedTodoForm';
import TodoList from './TodoList';

import {reducer, initialState} from '../reducers';


const TodoApp = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <EnchancedTodoForm dispatch={dispatch} />
      <TodoList state={state} dispatch={dispatch}/>
    </>
  );
};

export default TodoApp;
