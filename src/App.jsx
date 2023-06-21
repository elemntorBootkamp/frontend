import React from 'react';
import { Provider } from 'react-redux'
import './App.css'
import { ourStore } from './Redux/myStore'
import { BrowserRouter } from 'react-router-dom'
import { Routing } from '../allrouting'
import { Page } from '../src/components/Page'
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./components/keycloak";
import Nav from './components/login1';


function App() {
  //  const [isLogin, token] = useAuth();

	return <>
		{/* store-יש להגדיר ברכיב
   את המחסן שלנו*/}
		{/* <div>hello</div> */}
    <ReactKeycloakProvider authClient={keycloak}>
    <Provider store={ourStore}>
    <BrowserRouter>
    
    <Page></Page>
    <Nav></Nav>
    <Routing></Routing>
    
    </BrowserRouter>
    </Provider>
    </ReactKeycloakProvider>
  </>


}


export default App;