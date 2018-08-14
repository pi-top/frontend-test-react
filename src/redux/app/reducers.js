import actions from './actions';

const initState = {
    loading: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case actions.START_LOADING:
      return { ...state, loading: true };
    case actions.FINISH_LOADING:
        return { ...state, loading: false };
    default:
      return state;
  }
}
