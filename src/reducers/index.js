import  { combineReducers } from 'redux';
import symbolsReducer from './symbols';
import conversionReducer from './conversion';
import fluctuationReducer from './fluctuation';
import timeSeriesReducer from './time-series';

export default combineReducers({
    symbols: symbolsReducer,
    conversion: conversionReducer,
    fluctuation: fluctuationReducer,
    timeSeries: timeSeriesReducer
});

