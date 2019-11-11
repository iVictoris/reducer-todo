import React, {useReducer} from 'react';

import EnchancedTodoForm from './EnchancedTodoForm';
import TodoList from './TodoList';

import {reducer, initialState} from '../reducers';
import {TodoContext} from '../contexts';


const TodoApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TodoContext.Provider value={{state, dispatch}}>
      <EnchancedTodoForm dispatch={dispatch} />
      <TodoList state={state} dispatch={dispatch}/>
    </TodoContext.Provider>
  );
};

export default TodoApp;
