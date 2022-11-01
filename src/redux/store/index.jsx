import { legacy_createStore as createStore } from 'redux';

import {combineReducers} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import listReduer from '../reducers/list.reducer';

const rootReducer = combineReducers({
  list: listReduer,
})

const store = createStore(rootReducer, composeWithDevTools())

export default store