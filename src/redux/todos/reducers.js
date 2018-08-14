import actions from './actions';

const initState = {};

export default (state = initState, action) => {
  switch (action.type) {
    case actions.FETCH_TODOS_SUCCESS: {
      const obj = action.todos.reduce((acc, todo) => {
        acc[todo.id] = todo;
        return acc;
      }, {});
      return {
        ...state,
        ...obj,
      };
    }
    case actions.FETCH_TODO_SUCCESS: {
      return {
        ...state,
        [action.id]: action.todo
      };
    }
    case actions.RESET_TODOS_SUCCESS: {
      return {};
    }    
    default:
      return state;
  }
}
