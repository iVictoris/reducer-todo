import React, { useReducer } from "react";

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

const Todo = ({id, text, completed}) => {
  return (
    <div id={id} className={completed ? 'done' : ''}>
        <p>{text}</p>
      </div>
  )
}

// * TodoList
const TodoList = ({state}) => {
  const todos = state.map(item => {
    return (
      <Todo key={item.id} {...item} />
    );
  });

  return <div className="TodoList">{todos}</div>;
};

const TodoApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <EnchancedTodoForm dispatch={dispatch} />
      <TodoList state={state} dispatch={dispatch}/>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <TodoApp />
    </div>
  );
}

export { App, TodoList, EnchancedTodoForm };
