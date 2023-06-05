
import { useSelector } from "react-redux"




export const Hello = () => {
    let usersFromStore = useSelector((myStore) => {

        return myStore.userNamePassword
    })
    return <>
        
        <p>Hello{usersFromStore}</p>
    </>
}

