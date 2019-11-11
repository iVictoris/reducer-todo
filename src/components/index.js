import React, { useReducer } from "react";

import { App } from "./App";

// * TodoForm imports
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";

// * TodoList imports
import { initialState, reducer } from "../reducers";


// * Todo Form
const todoForm = () => {
  return (
    <Form>
      <Field type="text" placeholder="Add Todo" name='todo'/>
    </Form>
  );
};

const TodoForm = withFormik({
  mapPropsToValues ({todo = ''}) {
    return {todo}
  },
  validationSchema: Yup.object().shape({
    todo: Yup.string().required('Required to input text here')
  }),

  handleSubmit({todo}, {props: {addTodo}, resetForm}) {
    addTodo(todo)
    resetForm({todo: ''});
  }
})(todoForm)

// * TodoList
const TodoList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <div className="TodoList"></div>;
};

export { App, TodoList, TodoForm };
