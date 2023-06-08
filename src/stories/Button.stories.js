import { Button } from '../components/Button';

export default {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Primary = {
	args: {
		primary: true,
		label: 'Button',
	},
};

export const Secondary = {
	args: {
		secondary : true,
		label: 'Button',
		backgroundColor:'red',
		size:'small'
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

