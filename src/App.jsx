// import React from 'react';
// import { ReactKeycloakProvider } from "@react-keycloak/web";
// import {keycloak} from './Keycloak';
// import { Provider } from 'react-redux'
// import './App.css'
// import { ourStore } from './Redux/myStore'
// // import { BrowserRouter } from 'react-router-dom'
// import { Routing } from '../allrouting'
// import { Page } from '../src/components/Page'
// // import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Nav from './components/nav';
// import Home from './components/homepage';
// import Secured from './components/Securedpage';
// import PrivateRoute from './helpers/PrivateRoute';
// function App() {
  

// 	return <>

// <div>
//      <ReactKeycloakProvider authClient={keycloak}>
//        <Nav />
//        <BrowserRouter>
//          <Routes>
//            <Route exact path="/" element={<Home />} />
//            <Route
//              path="/secured"
//              element={
//                <PrivateRoute>
//                  <Secured />
//                </PrivateRoute>
//              }
//            />
//          </Routes>
//        </BrowserRouter>
//      </ReactKeycloakProvider>
//    </div>

// 		{/* store-יש להגדיר ברכיב
//    את המחסן שלנו*/}
// 		{/* <div>hello</div> */}
//     {/* <Provider store={ourStore}>
//     <BrowserRouter>
//     <Page></Page>
//     <Routing></Routing>
//     </BrowserRouter>
//     </Provider> */}
//   </>

// }


// export default App;



import Protected from "./components/Protected";
import Public from "./components/public";
import useAuth from "./components/hooks/useAuth";

function App() {

	const [isLogin, token] = useAuth();
	return isLogin ? <Protected token={token}/> : <Public/>;
}

export default App
