import { Route,Routes } from "react-router";
import { Login } from "./src/components/login";
import { Signup } from "./src/components/signup";
import { Dashboard } from "./src/components/Dashboard";
import { Page } from "./src/components/Page";
import { Details } from "./src/components/details";



export const Routing=()=>{
return<>
<Routes>
    <Route path="mainpage" element={<Page/>}></Route>
    <Route path="login/:component" element={<Login/>} />
    <Route path="signup" element={<Signup/>}/>
    <Route path="dashboard" element={<Dashboard/>}/>
    <Route path="moredetails/:titel" element={<Details/>}/>
</Routes>
</>
}