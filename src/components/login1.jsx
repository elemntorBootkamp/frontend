/* eslint-disable no-debugger */
import React from 'react';
import { useEffect, useState } from 'react';
import { useKeycloak } from '@react-keycloak/web';

const Nav = () => {
	debugger;
	const { keycloak, initialized } = useKeycloak();
	// eslint-disable-next-line no-unused-vars
	const [authenticated, setAuthenticated] = useState(false);
	// eslint-disable-next-line no-unused-vars
	const [token, setToken] = useState(null);
	debugger;
	useEffect(() => {
		if (initialized) {
			setAuthenticated(keycloak.authenticated);
			keycloak.getToken()
				.then((token) => {
					setToken(token);
				})
				.catch((error) => {
					console.error('Failed to get token', error);
				});
		}
	}, [initialized, keycloak.authenticated]);
	debugger;
	const handleLogout = async () => {
		await keycloak.logout();
		setAuthenticated(false);
	};
	debugger;
	const handleLogin = () => {
		keycloak.login();
	};
	debugger;
	return (
		<div>
			<button onClick={handleLogout}>Logout</button>

			<button onClick={handleLogin}>Login</button>
		</div>
	// <div>
	// //   {initialized && authenticated ? (
	//     <button onClick={handleLogout}>Logout</button>
	//   ) : (
	//     <button onClick={handleLogin}>Login</button>
	//   )}
	// </div>
	);
};

export default Nav;