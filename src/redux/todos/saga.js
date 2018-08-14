import { all, takeEvery, takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';
import { API_ENDPOINT, RESET_ENDPOINT } from '../../config';
import actions from './actions';
import appActions from '../app/actions';

const fetchGetTodos = () => {
  return axios.get(API_ENDPOINT)
  .then(response => {
    return response.data;
  })
  .catch(err => {
    console.error("Getting Todos error: ", err);
  })
}

const fetchGetTodoById = ({ id }) => {
	if (!id) return null;
	return axios.get(API_ENDPOINT + `/${id}`)
	.then(response => {
	  return response.data;
	})
	.catch(err => {
	  console.error("Getting TodoById error: ", err);
	})
  }

const addTodo = (data) => {
	return axios.post(API_ENDPOINT, data || {})
	.then(response => {
		return response;
	})
	.catch(err => {
		console.error("Adding Todo error: ", err);
	})
}

const updateTodo = ({ id, isDone }) => {
	if (!id) return false;
	return axios.put(API_ENDPOINT + `/${id}`, { isDone })
	.then(response => {
		return response;
	})
	.catch(err => {
		console.error("Updating Todo error: ", err);
	})
}

const deleteTodo = ({ id }) => {
	if (!id) return false;
	return axios.delete(API_ENDPOINT + `/${id}`)
	.then(response => {
		return response;
	})
	.catch(err => {
		console.error("Deleting Todo error: ", err);
	})
}

const resetTodos = () => {
  return axios.post(RESET_ENDPOINT)
  .then(response => {
    return response;
  })
  .catch(err => {
    console.error("Getting Todos error: ", err);
  })
}

export function* getTodosSaga() {
	try {
		yield put(appActions.startLoading());
		const data = yield call(fetchGetTodos);

		if (data && data.length) {
			yield put(actions.setTodos(data));	
		}
		yield put(appActions.finishLoading());
	} catch(err) {
		console.error(err);
	}
}

export function* getTodoByIdSaga({ payload }) {
	try {
		yield put(appActions.startLoading());
		const data = yield call(fetchGetTodoById, payload);

		if (data) {
			yield put(actions.setTodo(payload.id, data));	
		}
		yield put(appActions.finishLoading());
	} catch(err) {
		console.error(err);
	}
}

export function* addTodoSaga({ payload }) {
	try {
		yield put(appActions.startLoading());
		const res = yield call(addTodo, payload);
		if (res && res.status == 200) {
			yield put(actions.getTodos());
		}
	} catch(err) {
		console.error(err);
	}
}

export function* updateTodoSaga({ payload }) {
	try {
		const res = yield call(updateTodo, payload);
		if (res && res.status == 200) {
			yield put(actions.getTodo({id: payload.id}));
		}
	} catch(err) {
		console.error(err);
	}
}

export function* deleteTodoSaga({ payload }) {
	try {
		const res = yield call(deleteTodo, payload);
		if (res && res.status == 200) {
			yield put(actions.getTodos());
		}
	} catch(err) {
		console.error(err);
	}
}

export function* resetTodosSaga() {
	try {
		const res = yield call(resetTodos);
		if (res && res.status == 204) {
			yield put(actions.clearTodos());
			yield put(actions.getTodos());
		}
	} catch(err) {
		console.error(err);
	}
}

export default function* rootSaga() {
	yield all([
		takeLatest(actions.FETCH_TODOS, getTodosSaga),
		takeLatest(actions.FETCH_TODO, getTodoByIdSaga),
		takeEvery(actions.ADD_TODO, addTodoSaga),
		takeLatest(actions.UPDATE_TODO, updateTodoSaga),
		takeLatest(actions.DELETE_TODO, deleteTodoSaga),
		takeLatest(actions.RESET_TODOS, resetTodosSaga),
	])
}
