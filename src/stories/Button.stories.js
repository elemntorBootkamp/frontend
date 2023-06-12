import { Button } from '../components/Button';

export default {

  title: 'Button',
  component: Button,
  tags: ['autodocs'],
};

export const Primary = {
	args: {
		primary: true,
		size: 'medium',
		label: 'Button',
	},
};

export const withoutBackground = {
	args: {
		primary: false,
		size: 'medium',
		label: 'Button',
	},
};

export const Large = {
	args: {
		size: 'large',
		label: 'Button',
	},
};

export const Small = {
	args: {
		size: 'small',
		label: 'Button',
	},
};
