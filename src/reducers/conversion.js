export default (state = [], action ) => {

    switch (action.type) {
        case 'FETCH_CONVERSION':
            return action.payload;
        default:
            return state;
    }
};
