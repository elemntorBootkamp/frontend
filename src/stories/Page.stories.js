import { within, userEvent } from '@storybook/testing-library';
import { Page } from '../components/Page';

export default {
  title: 'Page',
  component: Page,
  parameters: {
    layout: 'fullscreen',
  },
};

export const LoggedOut = {};

export const LoggedIn = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const loginButton = await canvas.getByRole('button', {
			name: /Log in/i,
		});
		await userEvent.click(loginButton);
	},
};
