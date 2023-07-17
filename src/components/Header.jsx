
import PropTypes from 'prop-types';
// import { Button } from '../components/Button';
import './header.css';
import React from 'react';

import { Login } from './login';

export const
	// eslint-disable-next-line no-unused-vars
	Header = ({ onLogin, onLogout, ondashbord, onsignup, component }) => {
		// When the user clicks anywhere outside of the modal, close it
		var modal = document.getElementById('id01');

		// {
		// 	window.onclick = function (event) {
		// 		if (event.target == modal) {
		// 			modal.style.display = 'none';
		// 		}
		// 	};
		// }


		return <>
			<header>
				<div className="storybook-header">
					<div>
						<h1>Elementor</h1>
					</div>

					<div>
						<>
							<Login></Login>
							{/* <Button size="small" onClick={handleLogout} label="Log out" />
							<Button size="small" onClick={handleLogin} label="Log in" />
							<Button primary size="small" onClick={handleSignUp} label="Sign up" /> */}



							<button onClick={() => document.getElementById('id01').style.display = 'block'} style={{ width: '45px', height: '45px', borderRadius: '50%', backgroundColor: 'white' }}><img src={'icons8-customer-30.png'} ></img></button>


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