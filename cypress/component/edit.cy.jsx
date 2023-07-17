import {Edit} from '../../src/components/edit'
import { Provider } from 'react-redux';
import { ourStore } from '../../src/redux/myStore'

describe('Edit component', () => {
  beforeEach(() => {
    cy.mount(<Provider store={ourStore}><Edit/></Provider>)
    cy.window().its('store').invoke('dispatch', {
      type: 'SET_CURRENT_WEBSITE',
      payload: {
          id: 1,
          title: 'google',
          description: 'a search engine',
          typeOfDomain: 'domain',
          cpu: 'Intel Core i3',
          memory: '900',
          status: 'done',
      },
    })
  })

  it('should display current website data', () => {
    cy.mount(<Provider store={ourStore}><Edit/></Provider>)
    cy.get('#title').should('contain', 'Edit')
  })

  it('should update website data when clicking on "ok" button', () => {
    cy.mount(<Provider store={ourStore}><Edit/></Provider>)
    cy.get('#standard-error').clear().type('new title')
    cy.get('#Standard-error').clear().type('new description')
    cy.get('#standard-error').clear().type('new type of domain')
    cy.get('#standard-select-currency').click() 
    cy.get('[role="option"]').filter(':contains("Intel Core i3")').click() /
    cy.get('#standard-error').clear().type('new memory')
    cy.get('#buttonform').click()
  })

  it('should display error messages when input is invalid', () => {
    cy.mount(<Provider store={ourStore}><Edit/></Provider>)
    cy.get('#standard-error').clear().type('{selectall}{backspace}') 
    cy.get('#Standard-error').clear().type('{selectall}{backspace}') 
    cy.get('#standard-error').clear().type('{selectall}{backspace}') 
    cy.get('#standard-select-currency').click() 
    cy.get('[role="option"]').first().click() 
    cy.get('#buttonform').click()
  })
})

describe('Edit component 2', () => {
    beforeEach(() => {
        cy.mount(<Provider store={ourStore}><Edit/></Provider>)
    });
  
    it('should update the state with the correct values', () => {
      cy.get('input#standard-error').eq(0).type('New Title');
      cy.get('input#Standard-error').eq(0).type('New Description');
      cy.get('input#standard-error').eq(1).type('New Type');
      cy.get('input#standard-error').eq(2).type('New Memory');
  
      cy.get('input#standard-error').eq(0).should('have.value', 'New Title');
      cy.get('input#Standard-error').eq(0).should('have.value', 'New Description');
      cy.get('input#standard-error').eq(1).should('have.value', 'New Type');
      cy.get('input#standard-error').eq(2).should('have.value', 'New Memory');
    });
  });