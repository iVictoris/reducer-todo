const initialState = [
  {
    text: "Learn about reducers",
    completed: false,
    id: 3892987589

  }
]


const reducer = (initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const todos = [...initialState, action.payload];
      return todos;
    default:
      return initialState;
  }
}
export {
  reducer,
  initialState
}