import React from "react";

import { Form, Field, withFormik } from "formik";
import * as Yup from 'yup';

// * Todo Form
const TodoForm = () => {
  return (
    <Form>
      <Field type="text" placeholder="Add Todo" name="todo" />
    </Form>
  );
};

const EnchancedTodoForm = withFormik({
  mapPropsToValues({ todo = "" }) {
    return { todo };
  },
  validationSchema: Yup.object().shape({
    todo: Yup.string().required("Required to input text here")
  }),

  handleSubmit(
    { todo },
    {
      props: { dispatch },
      resetForm
    }
  ) {
    const todoItem = {
      id: Math.random()
        .toString(36)
        .substr(2, 9),
      text: todo,
      completed: false
    };
    dispatch({ type: "ADD_TODO", payload: todoItem });
    resetForm({ todo: "" });
  }
})(TodoForm);

export default EnchancedTodoForm;
