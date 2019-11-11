import React, { useReducer } from "react";

import { App } from "./App";

// * TodoForm imports
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";

// * TodoList imports
import { initialState, reducer } from "../reducers";


// * Todo Form
const TodoForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Form>
      <Field type="text" placeholder="Add Todo" name='todo'/>
    </Form>
  );
};

const EnchancedTodoForm = withFormik({
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
})(TodoForm)

// * TodoList
const TodoList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <div className="TodoList"></div>;
};

export { App, TodoList, EnchancedTodoForm };
