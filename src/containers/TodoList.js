import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import TodosList from '../components/TodosList';
import Controllers from './Controllers';
import todoActions from '../redux/todos/actions';

const { getTodos } = todoActions;

export const TodoListContainer = ({
  todos,
  loading,
}) => (
  <div>
    <Row type="flex" justify="space-around" align="top" gutter={16}>
      <Col span={16}>
        <TodosList
          data={Object.values(todos)}
          loading={loading}
        />
    </Col>
      <Col span={6}>
        <Controllers />
      </Col>
  </Row>
  </div>
);

export default connect(
  state => ({
    todos: state.Todos,
    loading: state.App.loading,
  }),
  { getTodos }
)(TodoListContainer);
