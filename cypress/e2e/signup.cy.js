describe('Signup Component', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/signup')
    })
  
    it('should render the h1 with the correct contebt', () => {
      cy.contains('signup').should('exist')
    })
  })