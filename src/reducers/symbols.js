export default (state = [], action ) => {

    switch (action.type) {
        case 'FETCH_SYMBOLS':
            return action.payload;
        default:
            return state;
    }
};
