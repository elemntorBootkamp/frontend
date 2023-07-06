/* eslint-disable no-debugger */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { Button } from '../components/Button';
import './header.css';
import { Profile } from './profile';
import React from 'react';
import { useEffect, useState } from 'react';
import { useKeycloak } from '@react-keycloak/web';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

import {
	MDBInput,
	MDBCheckbox,
	MDBBtn
} from 'mdb-react-ui-kit';

export const
	// eslint-disable-next-line no-unused-vars
	Header = ({ onLogin, onLogout, ondashbord, onsignup, component }) => {
		// When the user clicks anywhere outside of the modal, close it
		var modal = document.getElementById('id01');

		{
			window.onclick = function (event) {
				if (event.target == modal) {
					modal.style.display = 'none';
				}
			};
		}


		const { keycloak, initialized } = useKeycloak();
		// eslint-disable-next-line no-unused-vars
		const [authenticated, setAuthenticated] = useState(false);
		// eslint-disable-next-line no-unused-vars
		const [token, setToken] = useState(null);
		debugger;
		useEffect(() => {
			console.log('wow!!!!!😉');

			if (initialized) {
				setAuthenticated(keycloak.authenticated);
				// keycloak.getToken()
				// 	.then((token) => {
				// 		setToken(token);
				// 	})
				// 	.catch((error) => {
				// 		console.error('Failed to get token', error);
				// 	});
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
			console.log(keycloak.authenticated());
		};
		const handleSignUp = () => {
			keycloak.register();
		};
		debugger;
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



							<button onClick={() => document.getElementById('id01').style.display = 'block'} style={{ width: '45px', height: '45px', borderRadius: '50%', backgroundColor: 'white' }}><img src={'icons8-customer-30.png'} ></img></button>

							<div id="id01" className="modal">

								<form className="modal-content animate" >
									<div className="imgcontainer">
										<span onClick="document.getElementById('id01').style.display='none'" className="close" title="Close Modal">&times;</span>
									</div>
									<div style={{ marginLeft: '58%' }} >
										<Profile></Profile>
									</div>
									<div className="container">
										<form>
											<MDBInput id='form4Example1' wrapperClass='mb-4' label='Name' />
											<MDBInput type='email' id='form4Example2' wrapperClass='mb-4' label='Email address' />
											<MDBInput wrapperClass='mb-4' textarea id='form4Example3' rows={4} label='Message' />

											<MDBCheckbox
												wrapperClass='d-flex justify-content-center mb-4'
												id='form4Example4'
												label='Send me a copy of this message'
												defaultChecked
											/>

											<MDBBtn type='submit' className='mb-4' block>
												Sign in
											</MDBBtn>
										</form>      </div>

									<div className="container" style={{ backgroundColor: '#f1f1f1' }}>

										<button onClick={() => document.getElementById('id01').style.display = 'none'} className="cancelbtn">Cancel</button>
										<span className="psw">Forgot <a href="#">password?</a></span>
									</div>
								</form>
							</div>
						</>
						{/*                         
                        {
                            component.localeCompare('login')===0 || component.localeCompare('signup')===0?
                                <> 
                                    <Button size="small" onClick={handleLogout} label="Log out" />
                                    <Button size="small" onClick={ondashbord} label="dashboard" />
                                    
                                </>
                                :
                                component.localeCompare('dashboard')===0 ?
                                    <Button size="small" onClick={handleLogout} label="Log out" />
                                    :
                                    <>
                                        <Button size="small" onClick={handleLogin} label="Log in" />
                                        <Button primary size="small" onClick={handleSignUp} label="Sign up" />
                                    </>
                        } */}

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