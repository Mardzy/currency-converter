export default (state = [], action ) => {

    switch (action.type) {
        case 'FETCH_TIME_SERIES':
            return action.payload;
        default:
            return state;
    }
};
