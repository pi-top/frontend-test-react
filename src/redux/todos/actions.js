const actions = {
	FETCH_TODO: 'FETCH_TODO',
	FETCH_TODO_SUCCESS: 'FETCH_TODO_SUCCESS',
	FETCH_TODO_ERROR: 'FETCH_TODO_ERROR',
	FETCH_TODOS: 'FETCH_TODOS',
	FETCH_TODOS_SUCCESS: 'FETCH_TODOS_SUCCESS',
	FETCH_TODOS_ERROR: 'FETCH_TODOS_ERROR',
	UPDATE_TODO: 'UPDATE_TODO',
	UPDATE_TODO_SUCCESS: 'UPDATE_TODO_SUCCESS',
	ADD_TODO: 'ADD_TODO',
	ADD_TODO_SUCCESS: 'ADD_TODO_SUCCESS',
	DELETE_TODO: 'DELETE_TODO',
	DELETE_TODO_SUCCESS: 'DELETE_TODO_SUCCESS',
	RESET_TODOS: 'RESET_TODOS',
	RESET_TODOS_SUCCESS: 'RESET_TODOS_SUCCESS', 
	setTodos: (todos) => ({
		type: actions.FETCH_TODOS_SUCCESS,
		todos,
	}),
	setTodo: (id, todo) => ({
		type: actions.FETCH_TODO_SUCCESS,
		id,
		todo,
	}),
	getTodos: () => ({
		type: actions.FETCH_TODOS,
	}),
	getTodo: (payload) => ({
		type: actions.FETCH_TODO,
		payload,
	}),
	updateTodo: (payload) => ({
		type: actions.UPDATE_TODO,
		payload,
	}),
	addTodo: (payload) => ({
		type: actions.ADD_TODO,
		payload,
	}),
	deleteTodo: (payload) => ({
		type: actions.DELETE_TODO,
		payload,
	}),
	resetTodos: () => ({
		type: actions.RESET_TODOS,
	}),
	clearTodos: () => ({
		type: actions.RESET_TODOS_SUCCESS,
	}),
};

export default actions;