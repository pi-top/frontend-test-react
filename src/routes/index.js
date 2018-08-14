import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import TodoList from '../containers/TodoList';
import Todo from '../containers/Todo';

export default () => (
  <div>
    <Switch>
      <Route path="/todolist" component={TodoList} />
      <Route path="/todo/:id" component={Todo} />
      <Redirect to="/todolist" />
    </Switch>
  </div>
);
