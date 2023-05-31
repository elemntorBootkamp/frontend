import { useRef } from "react"
//useDispatch-הפעלת פעולות על הסטור
import {  useDispatch } from "react-redux"
import { useSelector } from "react-redux"
//import { setManagerPass } from "../redux/dataActions"

export const SmallComp = () => {
    //let usersFromStore-משתנה פנימי בקומפוננטה הנוכחית, המצפה לקבל לתוכו את ערך משתנה מהסטור
    //גישה לצפייה במשתני הסטור -useSelector-
    // let usersFromStore=useSelector((myStore)=>{return myStore.dataReducer1.users})
    // let userNameManagerFromStore = useSelector((myStore) => {
    //     return myStore.userNamePassword
    // })

    return <>
        <p>hello to  </p>
    </>
}


export const ShowAllUsers = () => {
    let usersFromStore = useSelector((myStore) => {
        return myStore.userNamePassword
    })
    return <>
        {
            usersFromStore != undefined && usersFromStore.length > 0
            && usersFromStore.map((u) =>
                <>
                    {/* { idUsers: 1, name: "רחלי", typeUser: [2], basket: [] }, */}
                    <div style={{ border: "2px pink double" }}>
                        <p>idUsers</p>
                        <p>name</p>
                        {/* <p>idUsers: {u.idUsers}</p> */}
                    </div>
                </>)
        }
    </>
}


export const ShowAllCaterogies = () => {
    let usersFromStore = useSelector((myStore) => {

        return myStore.userNamePassword
    })
    return <>
        {/* {
            myCategoriesFromStore != undefined && myCategoriesFromStore.length > 0 &&
            myCategoriesFromStore.map((c) => <>
                <p>{c.name}</p>
            </>)
        } */}
        <p>Hello{usersFromStore}</p>
    </>
}


export const UpdateManagerDatails = () => {
    let newPass = useRef()
    // לשימוש בהוק המאפשר הפעלת פעולות על הסטור
    let dispath = useDispatch()
    return <>
        <input type="password" ref={newPass} placeholder="enter new pass" onBlur={() => {
            console.log(newPass.current.value);
           
            // הפעלת הפונקציה שתעשה שינויים בסטור
            dispath(setManagerPass(newPass.current.value))
        }} />
        
    </>
}