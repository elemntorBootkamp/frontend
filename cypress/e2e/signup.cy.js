
describe('Signup Component', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/signup')
    })
  
    it('should render the Signup component correctly', () => {
      cy.contains('signup').should('exist')
    })
  })