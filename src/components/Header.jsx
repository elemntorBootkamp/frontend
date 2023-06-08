import PropTypes from 'prop-types';
import { Button } from '../components/Button'
import './header.css';
import { Secondary } from '../stories/Button.stories';
export const

    Header = ({ onLogin, onLogout, ondashbord, onsignup, component }) => (
        <header>
            <div className="storybook-header">
                {/* <img src='./aaa.jpg'></img> */}
                <div>
                    <h1>Elementor</h1>
                </div>
                <div>
                    {
                        component == 'login' || component == 'signup' ?
                            <> <Button primary={false} size="small"  onClick={onLogout} label="Log out" />
                                <Button primary size="small" onClick={ondashbord} label="dashboard" />
                            </>:
                        component=='dashboard'?
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
                component == ''|| component == 'logout' ?
                <>
                <label>באתר זה תוכלו לרכוש ולנהל את סביבת הענן של האתר שלכם</label>
                </>:<></>
            }
            
        </header>
    );

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
