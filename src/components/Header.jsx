
import PropTypes from 'prop-types';
import { Button } from '../components/Button';
import './header.css';
import { useSelector } from 'react-redux';
import React from 'react';
import { useEffect, useState } from 'react';
import { useKeycloak } from '@react-keycloak/web';
import { useNavigate } from 'react-router';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { UpdateCurrentUser } from '../Redux/action';
import { useDispatch } from 'react-redux';
import { updateKeycloak } from '../Redux/action';
import {
	MDBInput,
	MDBCheckbox,
	MDBBtn
} from 'mdb-react-ui-kit';

export const
	Header = ({ onLogin, onLogout, ondashbord, onsignup, component }) => {		

		const { keycloak, initialized } = useKeycloak();
		const [authenticated, setAuthenticated] = useState(false);

		const userDispach=useDispatch();
		const updateTokenDispach=useDispatch();

		debugger;
		useEffect(() => {
			console.log('wow!!!!!😉');

			if (initialized) {
				console.log(initialized+"keycloak.authenticated")
				console.log("token"+ keycloak.token)

				debugger
				setAuthenticated(keycloak.authenticated);
				if(keycloak.authenticated){
					const fullName = keycloak.tokenParsed.name;

				const CurrentUser={
					firstName :  fullName.split(' ')[0] ,
					lastName: fullName.split(' ')[1],
					email: keycloak.tokenParsed.email,
					password: keycloak.tokenParsed.password, 
				  };
				  debugger
				  userDispach(UpdateCurrentUser(CurrentUser))
				  updateTokenDispach(updateKeycloak(keycloak))
				}
				  console.log("keycloak.token",keycloak.token);
			}
		}, [initialized, keycloak.authenticated]);
		debugger;
		const navigateToEdit=useNavigate();
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
	
		const openEditComponent=()=>{
			if(keycloak.authenticated){
			navigateToEdit('/Edit')}
			else handleLogin();
		}
		
		return <>
			<header>
				<div className="storybook-header">
					<div>
						<h1>Elementor</h1>
					</div>

					<div>
						<>
							<Button size="small" onClick={handleLogout} label="Log out" />
							<Button size="small" onClick={handleLogin} label="Log in" />
							<Button primary size="small" onClick={handleSignUp} label="Sign up" />

							<button onClick={openEditComponent} style={{ width: '45px', height: '45px', borderRadius: '50%', backgroundColor: 'white' }}><img src={'icons8-customer-30.png'} ></img></button>

						</>

					</div>
				</div>
				{
					component.localeCompare('') === 0 ?
						<>
							<label>On this website you can purchase and manage your website's cloud environment</label>
						</> : <></>
				}

			</header>
		</>;
	};

Header.propTypes = {
	user: PropTypes.shape({
		name: PropTypes.string.isRequired,
	}),
	onLogin: PropTypes.func.isRequired,
	onLogout: PropTypes.func.isRequired,
};

Header.defaultProps = {
	user: null,
};