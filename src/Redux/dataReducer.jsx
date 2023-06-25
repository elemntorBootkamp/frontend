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
        { idUsers: 1, name: "רחלי", typeUser: [2], basket: [] },
        { idUsers: 2, name: "יעל", typeUser: [2, 4], basket: [] },
        { idUsers: 3, name: "שושי", typeUser: [1, 4], basket: [] },
        { idUsers: 3, name: "שירה", typeUser: [3], basket: [] },
    ],
     allWebsite :[
        {
            id: 1,
            title: "aaa",
            description: "aaa",
            type_of_domain: "qwert",
            cpu: "qwert",
            memory: "123452",
            status: "qwer"
        },
        {
            id: 4,
            title: "bbb",
            description: "bbb",
            type_of_domain: "66666",
            cpu: "bbb",
            memory: "123456",
            status: "bbb"
        },
        {
            id: 3,
            title: "uuu",
            description: "uuu",
            type_of_domain: "uuu",
            cpu: "uuu",
            memory: "777777",
            status: "uuu"
        },
        {
            id: 2,
            title: "ccc",
            description: "ccc",
            type_of_domain: "ccc",
            cpu: "ccc",
            memory: "00000",
            status: "ccc"
        }
    ]
}



export const dataReducer = produce((state, action) => {
    
}, InitialState)






