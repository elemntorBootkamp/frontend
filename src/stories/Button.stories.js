import { Button } from '../components/Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {

  title: 'Button',
  component: Button,
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
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
