import {produce} from 'immer'

//שלב 1- הגדרת אובייקט עם נתונים
//בנושא מסויים
//אובייקט זה מכיל את כל המשתנים  הרלוונטיים למכלול הקומפוננות
  const InitialState = {
    userNameManager: "Manager",
    userNamePassword: "😂🤣🤣",
    wishes: ["שנה וטבה", "כתיבה וחתימה טובה", "שנת בריאות ושמחות"],
    categories: [
        { id: 1, name: " לקוחות קבועים" },
        { id: 2, name: " לקוחות חדשים" },
        { id: 3, name: " לקוחות זמניים" },
        { id: 4, name: " לקוחות חברי מועדי" }
    ],

    users: [
        { idUsers: 1, name: "רחלי", typeUser: [2], basket: [] },
        { idUsers: 2, name: "יעל", typeUser: [2, 4], basket: [] },
        { idUsers: 3, name: "שושי", typeUser: [1, 4], basket: [] },
        { idUsers: 3, name: "שירה", typeUser: [3], basket: [] },
    ]
}


//שלב 2-
// הגדרת אובייקט חיצוני 
//מקובל לכנות אותו בסיומת של Reducer
//מכיר את הנתונים- האובייקט הגלובאלי
export const dataReducer = produce((state, action) => {
    // return { type: "SET_MANAGER_PASS", payload: newPass }
    switch (action.type) {
        case "SET_MANAGER_PASS":
            state.userNamePassword = action.payload
            break;
        case "ADD_NEW_USER":
            state.users.push(action.payload)
            break;
        default:
            break;
    }
}, InitialState)






