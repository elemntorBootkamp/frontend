/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable indent */
import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { ourStore } from './Redux/myStore';
import { BrowserRouter} from 'react-router-dom';
import { Routing } from '../allrouting';
import { Page } from '../src/components/Page';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak from './components/keycloak';
import Nav from './components/login1';
// import { Form1 } from './components/setting';
import LoginForm from './components/details';
// import { Profile } from './components/profile';
// import FormPropsTextFields from './components/sett';
// import axios from 'axios';

function App() {

	
	

	return <>
		{/* store-יש להגדיר ברכיב
   את המחסן שלנו*/}
		{/* <div>hello</div> */}
		<ReactKeycloakProvider authClient={keycloak}>
			<Provider store={ourStore}>
				<BrowserRouter>
    
					<Page></Page>
					<Nav></Nav>
          {/* <Form1></Form1> */}
		  {/* <LoginForm></LoginForm> */}
          {/* <Profile></Profile> */}
          {/* <FormPropsTextFields></FormPropsTextFields> */}
					<Routing></Routing>
    
				</BrowserRouter>
			</Provider>
		</ReactKeycloakProvider>
	</>;


}


export default App;