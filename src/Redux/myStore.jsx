import { createStore, combineReducers } from "redux";
import {dataReducer } from "./dataReducer";


const reducers =dataReducer ;
 
export const ourStore = createStore(reducers)

window.store=ourStore;


