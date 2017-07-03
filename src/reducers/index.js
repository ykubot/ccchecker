import { combineReducers } from 'redux';
import CryptCurrencyReducer from './CryptCurrencyReducer';

export default combineReducers({
    cryptCurrency: CryptCurrencyReducer
});
