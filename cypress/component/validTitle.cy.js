import {validateTitle} from '../../src/components/validation'
describe('validateTitle function', () => {
    
  it('returns "Maximum length 50 characters" when title is longer than 50 characters', () => {
      const title = 'This is a very long title that exceeds the maximum length of 50 characters';
      const errorMessage = 'Maximum length 50 characters';
      cy.wrap(validateTitle(title)).should('eq', errorMessage);
    });

    it('returns "required" when title is empty', () => {
      const title = '';
      const errorMessage = 'required';
      cy.wrap(validateTitle(title)).should('eq', errorMessage);
    });

    it('returns "Minimum length 3 characters" when title is shorter than 3 characters', () => {
      const title = 'ab';
      const errorMessage = 'Minimum length 3 characters';
      cy.wrap(validateTitle(title)).should('eq', errorMessage);
    });
  
    it('returns "Can contain English letters and spaces only" when title contains non-English characters', () => {
      const title = 'כותרת בעברית';
      const errorMessage = 'Can contain English letters and spirits only';
      cy.wrap(validateTitle(title)).should('eq', errorMessage);
    });
    
    it('returns an empty string when title is valid', () => {
      const title = 'Valid Title';
      const errorMessage = '';
      cy.wrap(validateTitle(title)).should('eq', errorMessage);
    });
  });
  