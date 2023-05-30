import { createStore, combineReducers } from "redux";
import {dataReducer } from "./dataReducer";
import { useSelector } from "react-redux";


const reducers =dataReducer ;
  
 export const ourStore = createStore(reducers)

 window.store=ourStore;


