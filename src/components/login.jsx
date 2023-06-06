import { useSelector } from "react-redux"




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