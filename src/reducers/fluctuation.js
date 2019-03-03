export default (state = [], action ) => {

    switch (action.type) {
        case 'FETCH_FLUCTUATION':
            return action.payload;
        default:
            return state;
    }
};
