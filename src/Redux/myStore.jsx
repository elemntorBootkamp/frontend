import { createStore, combineReducers } from "redux";
//יכולת של ריקס לבנות סטור- מחסן
import { createStore} from "redux";
//הכרות עם הרדוסר הרלוונטי
//הנתונים הגלובאליים הרלוונטיים
import {dataReducer } from "./dataReducer";


const reducers =dataReducer ;
  
 export const ourStore = createStore(reducers)

 window.store=ourStore;


