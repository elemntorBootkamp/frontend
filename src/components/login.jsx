/* eslint-disable no-debugger */
import { Button } from '../components/Button';
import React from 'react';
import { useEffect, useState } from 'react';
import { useKeycloak } from '@react-keycloak/web';
import { useDispatch } from 'react-redux';
import { sendTokenStore } from '../Redux/action';
import { setUserId } from '../Redux/action';
// import {getToken} from '../API/api';
import axios from 'axios';

export const Login = () => {

	const Dispatch = useDispatch();
	const { keycloak, initialized } = useKeycloak();
	const [authenticated, setAuthenticated] = useState(false);
	useEffect(() => {
		if (initialized) {
			setAuthenticated(keycloak.authenticated);
			Dispatch(sendTokenStore(keycloak.token) );
			Dispatch(setUserId(keycloak.subject));
			debugger;
			// getToken(keycloak.token);
			
		}
	}, [initialized, keycloak.authenticated]);

	const handleLogout = async () => {
		await keycloak.logout();
		setAuthenticated(false);
		Dispatch(sendTokenStore(null) );
	};

	const handleLogin = () => {
		keycloak.login();
		console.log(keycloak.authenticated());
	};
	const handleSignUp = () => {
		keycloak.register();
	};
	
	axios.interceptors.request.use(
		(config) => {
			debugger;

			const token = keycloak.token;
			const userId = keycloak.subject;
			console.log(token);
			console.log(userId);
			if (token) {
				config.headers.Authorization = `Bearer ${token}`;
				config.headers.USERID = userId;
			}
			return config;
		},
		(error) => {
			console.log('error');
			return Promise.reject(error);
		}
	);

	return <>
		<div>
			{initialized && authenticated ? (

				console.log('Access token:', keycloak.token),
				console.log('ID token:', keycloak.idToken),

				<>
					<Button size="small" onClick={handleLogout} label="Log out" />
					<h5>Welcome, {keycloak.tokenParsed.preferred_username}!</h5>

				</>
			) : (
				<>
					<Button size="small" onClick={handleLogin} label="Log in" />
					<Button size="small" onClick={handleSignUp} label="Sign up" />
				</>
			)}
		</div>


	</>;
};