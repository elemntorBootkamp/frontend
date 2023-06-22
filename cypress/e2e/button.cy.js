/* eslint-disable no-undef */

describe('Button Component', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000');
	});
	it('should render the button with the correct background color', () => {
		cy.get('.storybook-button').should('have.css', 'background-color', 'rgba(0, 0, 0, 0)');
	});
	it('should render the button with the correct size', () => {
		cy.get('.storybook-button').should('have.class', 'storybook-button--small');
	});
	it('should render the button with the primary style when primary prop is true', () => {
		cy.visit('http://localhost:3000');
		cy.get('.storybook-button').should('have.class', 'storybook-button--primary');
	});
	it('should render the button with the secondary style when primary prop is false', () => {
		cy.visit('http://localhost:3000');
		cy.get('.storybook-button').should('have.class', 'storybook-button--secondary');
	});
});





