import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { ourStore } from './Redux/myStore';
import { BrowserRouter} from 'react-router-dom';
import { Routing } from '../allrouting';
import { Page } from '../src/components/Page';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak from './components/keycloak';


function App() {

	
	

	return <>
	
		<ReactKeycloakProvider authClient={keycloak}>
			<Provider store={ourStore}>
				<BrowserRouter>
    
					<Page></Page>
				
        
					<Routing></Routing>
    
				</BrowserRouter>
			</Provider>
		</ReactKeycloakProvider>
	</>;


}


export default App;