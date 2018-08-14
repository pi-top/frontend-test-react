import React from 'react';
import { connect } from 'react-redux';
import TodoDetail from '../components/TodoDetail';
import todoActions from '../redux/todos/actions';

const { updateTodo } = todoActions;

const getTodoId = (props) => {
  const paths = props.history.location.pathname.split('/');
  return paths[paths.length - 1];
}

export default connect(
  (state, ownProps) => {
    let data = null;
    const id = getTodoId(ownProps);
    const todos = state.Todos;
    if (!id || !todos) return { data };
    return { data: todos[id] };
  },
  { updateTodo }
)(TodoDetail);