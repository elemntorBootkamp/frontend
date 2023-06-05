
import { Link } from 'react-router-dom'
import { Button } from '../stories/Button'



//כניסה
export const Login = () => {
    return <>
        <h1>login</h1>
        <Button label='login'></Button>
    </>
}

export const Header = () => {
    return <>
        <ul >
            <button><Link to='login'>login</Link></button>
            <button><Link to='login'>signin</Link></button>
        </ul>
    </>

}