import PropTypes from 'prop-types';
import { Button } from './button';
import './header.css';


export const Header = ({ onLogin, onLogout, ondashbord, onsignup, component }) => {
	return <>
		<header>
			<div className="storybook-header">
				<div>
					<h1>Elementor</h1>
				</div>
				<div>
					{
						component.localeCompare('login')===0 || component.localeCompare('signup')===0?
							<> <Button size="small" onClick={onLogout} label="Log out" />
								<Button size="small" onClick={ondashbord} label="dashboard" />
							</>
							:
							component.localeCompare('dashboard')===0 ?
								<Button size="small" onClick={onLogout} label="Log out" />
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
