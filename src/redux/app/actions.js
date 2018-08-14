const actions = {
    START_LOADING: 'START_LOADING',
    FINISH_LOADING: 'FINISH_LOADING',
    startLoading: () => ({
        type: actions.START_LOADING,
    }),
    finishLoading: () => ({
        type: actions.FINISH_LOADING,
    }),
}

export default actions;