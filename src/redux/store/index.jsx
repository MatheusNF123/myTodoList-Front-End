import { legacy_createStore as createStore } from 'redux';

import {combineReducers} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import listReduer from '../reducers/list.reducer';
import listFolderReduer from '../reducers/listFolders.reduce';

const rootReducer = combineReducers({
  list: listReduer,
  listFolder: listFolderReduer
})

const store = createStore(rootReducer, composeWithDevTools())

export default store