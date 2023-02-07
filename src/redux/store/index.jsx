import { legacy_createStore as createStore, applyMiddleware } from 'redux';

import {combineReducers} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import listFolderReduer from '../reducers/listFolders.reduce';

const rootReducer = combineReducers({
  listFolder: listFolderReduer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store