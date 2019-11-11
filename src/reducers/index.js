const initialState = [
  {
    text: "Learn about reducers",
    completed: false,
    id: 3892987589
  }
];

const reducer = (initialState, action) => {
  let todos, todo;
  switch (action.type) {
    case "ADD_TODO":
      todos = [...initialState, action.payload];
      return todos;
    case "COMPLETE_TODO":
      todo = initialState.filter(todo => todo.id === action.payload)[0];
      todos = initialState.filter(todo => todo.id !== action.payload);
      todo.completed = !todo.completed
      todos = [...todos, todo]
      return todos;
    case 'ClEAR_TODOS':
      todos = initialState.filter(todo => !todo.completed);
      return todos;
    default:
      return initialState;
  }
};
export { reducer, initialState };
