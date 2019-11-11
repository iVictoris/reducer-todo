import React, { useReducer } from "react";
import { initialState, reducer } from "../reducers";

import { App } from "./App";

const TodoList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <div className="TodoList"></div>;
};

export { App, TodoList };
