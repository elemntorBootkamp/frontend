import 'cypress-react-selector';

describe("create todo spec", () => {
  before(() => {
    // this will launch the page in cypress browser
    cy.visit("http://localhost:3000");
  });
})

describe('Button Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('should render the button with the correct background color', () => {
    cy.get('.storybook-button').should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
  })
  it('should render the button with the correct size', () => {
    cy.get('.storybook-button').should('have.class', 'storybook-button--small')
  })
  it('should render the button with the primary style when primary prop is true', () => {
    cy.visit('http://localhost:3000')
    cy.get('.storybook-button').should('have.class', 'storybook-button--primary')
  })
  it('should render the button with the secondary style when primary prop is false', () => {
    cy.visit('http://localhost:3000')
    cy.get('.storybook-button').should('have.class', 'storybook-button--secondary')
  })
})

describe('Signup Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/signup')
  })

  it('should render the h1 with the correct contebt', () => {
    cy.contains('signup').should('exist')
  })
})



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
    // Stub the onLogin function to simulate logging in
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