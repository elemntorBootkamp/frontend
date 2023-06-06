import { Route,Routes } from "react-router"
import {Login} from './src/components/main_page'

export const Routing=()=>{
return<>
<Routes>
    <Route path='login/:parameter' element={<Login/>}></Route>
</Routes>
</>
}