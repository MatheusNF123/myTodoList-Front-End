import { legacy_createStore as createStore } from 'redux';

import {combineReducers} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import listFolderReduer from '../reducers/listFolders.reduce';

const rootReducer = combineReducers({
  listFolder: listFolderReduer
})

const store = createStore(rootReducer, composeWithDevTools())

export default store