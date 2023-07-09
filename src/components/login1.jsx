/* eslint-disable no-mixed-spaces-and-tabs */

import React from 'react';
import { useEffect, useState } from 'react';
import { useKeycloak } from '@react-keycloak/web';

import axios from 'axios';
const Nav = () => {
	
	const { keycloak, initialized } = useKeycloak();

	// eslint-disable-next-line no-unused-vars
	const [authenticated, setAuthenticated] = useState(false);
	// eslint-disable-next-line no-unused-vars


	
	useEffect(() => {
		console.log('wow!!!!!😉');
		// console.log(keycloak.authenticated());
		if (initialized) {
			setAuthenticated(keycloak.authenticated);
			//  sendToken(keycloak.token);
			//   sendTokenTNode(keycloak.token);

		}
	}, [initialized, keycloak.authenticated]);
	
	const handleApiCall = async () => {
		try {
			
			console.log('😛');
			const config = {
				headers: { Authorization: `Bearer ${keycloak.token}` },
			};
			console.log('😛😛');
			 const response = await axios.get('http://localhost:8090/protected',config);
			console.log('😛😛😛');
			 console.log(response.data);
		} catch (error) {
			console.error(error);
		}
	};
	const handleLogout = async () => {
		await keycloak.logout();
		setAuthenticated(false);
	};
	debugger;
	const handleLogin = () => {
		keycloak.login();
		console.log(keycloak.authenticated());
	};
	const handleSignUp = () => {
		keycloak.register();
	};
	const handleClick = () => {
		keycloak.accountManagement();
	};
	// const handleApiCall = async () => {
	//     try {
	//       // Add the token to the Authorization header
	//       const config = {
	//         headers: { Authorization: `Bearer ${keycloak.token}` },
	//       };
	//       const response = await axios.get('http://localhost:8090/api/protected', config);
	//       console.log(response.data);
	//     } catch (error) {
	//       console.error(error);
	//     }
	//   };
	


	return (

		<div>
			{initialized && authenticated ? (

				console.log('Access token:', keycloak.token),
				console.log('ID token:', keycloak.idToken),

				<>
					<h2>Welcome, {keycloak.tokenParsed.preferred_username}!</h2>
					<button onClick={handleLogout}>Logout</button>
					<button onClick={handleClick}>Edit Profile</button>
					<button onClick={handleApiCall}>Call Protected API</button>
				</>


			) : (
				<>
					<button onClick={handleLogin}>Login</button>
					<button onClick={handleSignUp}>Sign up</button>
				</>
			)}
		</div>
	);
};

export default Nav;