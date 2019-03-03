import  { combineReducers } from 'redux';
import symbolsReducer from './symbols';
import conversionReducer from './conversion';

export default combineReducers({
    symbols: symbolsReducer,
    conversion: conversionReducer
});
