/* eslint-disable react/react-in-jsx-scope */
import PropTypes from 'prop-types';
import './button.css';

// eslint-disable-next-line react/prop-types
export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
	const mode = primary
		? 'storybook-button--primary'
		: 'storybook-button--secondary';
	return (
		<Button
			type="button"
			className={['storybook-button', `storybook-button--${size}`, mode].join(
				' '
			)}
			style={backgroundColor && { backgroundColor }}
			{...props}
		>
			{label}
		</Button>
	);
};

Button.propTypes = {
	primary: PropTypes.bool,
	size: PropTypes.oneOf(['small', 'medium', 'large', 'xl']),
	label: PropTypes.string.isRequired,
	onClick: PropTypes.func,
};

Button.defaultProps = {
	primary: false,
	size: 'medium',
	onClick: undefined,
};
