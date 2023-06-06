//ligin/logout
export const Login = ({component}) => {
    return <>
        {
            component=='login'? <h1>login</h1> : <h1>logout</h1>
        }

    </>
}
//edit/new user
export const Signup = ({component}) => {
    return <>
        {
             component=='signup' ? <h1>signup</h1> : <h1>dashbord</h1>
        }

    </>

}