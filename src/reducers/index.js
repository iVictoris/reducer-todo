const initialState = [
  {
    text: "Learn about reducers",
    completed: false,
    id: 3892987589
  }
];

const reducer = (initialState, action) => {
  let todos;
  switch (action.type) {
    case "ADD_TODO":
      todos = [...initialState, action.payload];
      return todos;
    case "COMPLETE_TODO":
      const todo = initialState.filter(todo => todo.id === action.payload);
      todos = initialState.filter(todo => todo.id !== action.payload);
      todo.completed = !todo.completed;
      return [...todos, todo];
    default:
      return initialState;
  }
};
export { reducer, initialState };
