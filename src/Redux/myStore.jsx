//יכולת של ריקס לבנות סטור- מחסן
import { createStore} from "redux";
//הכרות עם הרדוסר הרלוונטי
//הנתונים הגלובאליים הרלוונטיים
import {dataReducer } from "./dataReducer";

//שלב 3-
//בנייץת הסטור בפועל
//שימוש בפונקצייה של רידקס לבניית סטור
//ייצוא הסטור הזה

//חיבור בין הרדוסרים
const reducers =dataReducer ;
  
    

//בניית הסטור מקבלת את הרדוסרים המאוחדים
export const ourStore = createStore(reducers)

 window.store=ourStore;


//מעכשיו הגישה לסטור תהיה עי :
//שם הסטור. שם הרוסר. שם המשתנה
//  useSelector((store)=>store.dataReducer.userName)
