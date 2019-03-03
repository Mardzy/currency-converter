import fixerIo from '../apis/fixerIo';

export const fetchSymbols = () => /*async*/ dispatch => {
    // const response = await fixerIo.get('/symbols');
    // console.log('dispatch', dispatch);
    const response = {
        data:{
            symbols: {
                AED: 'United Arab Emirates Dirham',
                AFN: 'Afghan Afghani',
                ALL: 'Albanian Lek',
                AMD: 'Armenian Dram'
            }
        }
    };

    dispatch({ type: 'FETCH_SYMBOLS', payload: response.data.symbols });
};

export const fetchConversion = (from, to, amount) => /*async*/ dispatch => {
    // const response = await fixerIo.get('/convert', {
    //     params: { from, to, amount }
    // });
    const response = {
        data: {

            date: "2019-03-03",
            info: {timestamp: 1551619686, rate: 20.31123},
            query: {from: "AED", to: "AFN", amount: 50},
            result: 1015.5615,
            success: true
        }
    };

    dispatch({ type: 'FETCH_CONVERSION', payload: response.data });
};

