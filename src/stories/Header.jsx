
import PropTypes from 'prop-types';
///import clouds from '../assets/clouds.jpg'
import { Button } from '../components/Button'
import './header.css';
export const 
Header = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <header>

    <div className="storybook-header">      
      <img src='./aaa.jpg'></img>
      <div>
        <h1>Elementor</h1>
      </div>
      <div>
        {user ? (
          <>
            <Button size="small" onClick={onLogout} label="Log out" />
            <Button size="small" onClick={onCreateAccount} label="dashboard" />
          </>
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="Log in" />
            <Button primary size="small" onClick={onCreateAccount} label="Sign up" />
          </>
        )}
      </div>
    </div>
  </header>
);

Header.propTypes = {
  user: PropTypes.shape({
  name: PropTypes.string.isRequired,
  }),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};
