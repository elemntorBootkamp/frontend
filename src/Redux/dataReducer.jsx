import {produce} from 'immer'

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
        { idUsers: 1,name: "רחלי",typeUser: [2],basket: [] },
        { idUsers: 2,name: "יעל",typeUser: [2,4],basket: [] },
        { idUsers: 3,name: "שושי",typeUser: [1,4],basket: [] },
        { idUsers: 3,name: "שירה",typeUser: [3],basket: [] },
    ],
     allWebsite :[
        {
            title: "aaa",
            description: "aaa",
            type_of_domain: "qwert",
            cpu: "AMD Ryzen 7",
            memory: "123452",
            status: "qwer"
        },
        {
            title: "bbb",
            description: "bbb",
            type_of_domain: "66666",
            cpu: "'ARM Cortex-A73'",
            memory: "123456",
            status: "bbb"
        },
        {
            title: "uuu",
            description: "uuu",
            type_of_domain: "uuu",
            cpu: "'ARM Cortex-A73'",
            memory: "777777",
            status: "uuu"
        },
        {
            title: "ccc",
            description: "ccc",
            type_of_domain: "ccc",
            cpu: "AMD Ryzen 7",
            memory: "00000",
            status: "ccc"
        }
    ],
    currentWebsit:{}
}



export const dataReducer = produce((state, action) => {
    switch (action.type) {
        case "SET_CURRENT_WEBSITE":
            state.currentWebsit = action.payload
            break;
        default:
            break;
    }
}, InitialState)






