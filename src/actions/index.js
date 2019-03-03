import fixerIo from '../apis/fixerIo';

export const fetchSymbols = () => async dispatch => {
    const response = await fixerIo.get('/symbols');



    dispatch({ type: 'FETCH_SYMBOLS', payload: response.data.symbols });
};

export const fetchConversion = (from, to, amount) => async dispatch => {
    const response = await fixerIo.get('/convert', {
        params: { from, to, amount }
    });


    dispatch({ type: 'FETCH_CONVERSION', payload: response.data });
};

export const fetchFluctuation = (start_date, end_date) => async dispatch => {
    const response = await fixerIo.get('/fluctuation', {
        params: { start_date, end_date }
    });

    dispatch({ type: 'FETCH_FLUCTUATION', payload: response.data });
};
