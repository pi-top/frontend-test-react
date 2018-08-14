import { store } from './store';
import todoActions from './todos/actions';

export default () =>
  new Promise(() => {
    store.dispatch(todoActions.getTodos());
  });