import PropTypes from 'prop-types';
import './button.css'

export const Button = () => {
  return (
    <button type="button" className='button'></button>
  );
};

Button.propTypes = {

  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
