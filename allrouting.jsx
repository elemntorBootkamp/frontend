import { Route,Routes } from "react-router";
import { Login } from "./src/components/login";
import { Signup } from "./src/components/signup";
import { Dashboard } from "./src/components/dashboard";
import { Page } from "./src/components/Page";
import { Edit } from "./src/components/edit";
import { MoreDetails } from "./src/components/moreDetails";
import { Backups } from "./src/components/backup";
export const Routing=()=>{
    return<>
        <Routes>
            <Route path="mainpage" element={<Page/>}></Route>
            <Route path="login/:component" element={<Login/>} />
            <Route path="signup" element={<Signup/>}/>
            <Route path="dashboard" element={<Dashboard/>}/>
            <Route path="editoradd/:state" element={<Edit/>}/>
            <Route path="moredetails" element={<MoreDetails/>}/>
            <Route path="backup" element={<Backups/>}/>
        </Routes>
    </>;
};