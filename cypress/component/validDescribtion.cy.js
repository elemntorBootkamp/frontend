import {validateDescribtion} from '../../src/components/validation';

describe('validateDescribtion function', () => {
  
    it('returns "required" when describtion is empty', () => {
      const describtion = '';
      const errorMessage = 'required';
      cy.wrap(validateDescribtion(describtion)).should('eq', errorMessage);
    });
  
    it('returns "Minimum length 10 characters" when describtion is shorter than 10 characters', () => {
      const describtion = 'abc';
      const errorMessage = 'Minimum length 10 characters';
      cy.wrap(validateDescribtion(describtion)).should('eq', errorMessage);
    });
  
    it('returns "Can contain English letters and spaces only" when describtion contains non-English characters', () => {
      const describtion = 'תיאור בעברית';
      const errorMessage = 'Can contain English letters and spirits only';
      cy.wrap(validateDescribtion(describtion)).should('eq', errorMessage);
    });
  
    it('returns an empty string when describtion is valid', () => {
      const describtion = 'Valid Description';
      const errorMessage = '';
      cy.wrap(validateDescribtion(describtion)).should('eq', errorMessage);
    });
  });