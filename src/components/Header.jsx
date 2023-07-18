/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './button';
import './header.css';


export const

	Header = ({ onLogin, onLogout, ondashbord, onsignup, component, onbackup }) => {
		return <>
			<header>
				<div className="storybook-header">
					<div>
						<h1>Elementor</h1>
					</div>
					<div>
						{
							component === 'login' || component === 'signup' ?
								<> <Button size="small" onClick={onLogout} label="Log out" />
									<Button size="small" onClick={ondashbord} label="dashboard" />
									<Button size="small" onClick={onbackup} label="backups" />

								</>
								:
								component === 'dashboard' ?
									<>
										<Button size="small" onClick={onLogout} label="Log out" />
										<Button size="small" onClick={onbackup} label="backups" />
									</>
									:
									component === 'backup' ?
										<>
											<Button size="small" onClick={onLogout} label="Log out" />
											<Button size="small" onClick={ondashbord} label="dashboard" />
										</>
										:
										<>
											<Button size="small" onClick={onLogin} label="Log in" />
											<Button primary size="small" onClick={onsignup} label="Sign up" />
										</>
						}

					</div>
				</div>
				{
					component.localeCompare('') === 0 ?
						<>
							<label>On this website you can purchase and manage your websites cloud environment</label>
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
