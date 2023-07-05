import {validateMemory} from '../../src/components/validation';

describe('validateMemory function', () => {
    it('returns "required" when memory is empty', () => {
      const memory = '';
      const errorMessage = 'required';
      cy.wrap(validateMemory(memory)).should('eq', errorMessage);
    });
  
    it('returns "Can only contain numbers" when memory contains non-numeric characters', () => {
      const memory = 'abc';
      const errorMessage = 'Can only contain numbers';
      cy.wrap(validateMemory(memory)).should('eq', errorMessage);
    });
  
    it('returns "Number must be bigger than 10" when memory is less than 10', () => {
      const memory = '5';
      const errorMessage = 'Number must be bigger than 10';
      cy.wrap(validateMemory(memory)).should('eq', errorMessage);
    });
  
    it('returns an empty string when memory is valid', () => {
      const memory = '16';
      const errorMessage = '';
      cy.wrap(validateMemory(memory)).should('eq', errorMessage);
    });
  });