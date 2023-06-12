import 'cypress-react-selector';

describe('Page component', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
      cy.waitForReact(1000,'#root');
    });
  
    it('displays the header with log in and sign up buttons', () => {
      cy.getReact('Page')
        .getReact('Header')
        .contains('Log in')
        .should('be.visible');
  
      cy.getReact('Page')
        .getReact('Header')
        .contains('Sign up')
        .should('be.visible');
    });
  
    it('allows the user to navigate to the login page', () => {
      cy.getReact('Page')
        .getReact('Header')
        .contains('Log in')
        .click();
  
      cy.url().should('contain', '/login');
    });
  
    it('allows the user to navigate to the dashboard page when logged in', () => {
      cy.getReact('Page')
        .getReact('Header')
        .then($header => {
          const { onLogin } = $header.props();
          onLogin();
        });
  
      cy.getReact('Page')
        .getReact('Header')
        .contains('Dashboard')
        .click();
  
      cy.url().should('contain', '/dashboard');
    });
  });