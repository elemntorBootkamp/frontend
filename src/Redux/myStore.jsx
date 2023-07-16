// eslint-disable-next-line no-unused-vars
import { createStore,applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { dataReducer } from './dataReducer.jsx';


const reducers =dataReducer ;
 
export const ourStore = createStore(reducers, applyMiddleware(thunk));

window.store=ourStore;
