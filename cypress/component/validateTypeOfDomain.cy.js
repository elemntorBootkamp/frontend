/* eslint-disable no-undef */
import {validateTypeOfDomain} from '../../src/components/validation';

describe('validateTypeOfDomain function', () => {
	it('returns "Maximum length 63 characters" when typeOfDomain is longer than 63 characters', () => {
		const typeOfDomain = 'ThisIsAVeryLongTypeOfDomainThatExceedsTheMaximumLengthOf63Characters';
		const errorMessage = 'Maximum length 63 characters';
		cy.wrap(validateTypeOfDomain(typeOfDomain)).should('eq', errorMessage);
	});
  
	it('returns "required" when typeOfDomain is empty', () => {
		const typeOfDomain = '';
		const errorMessage = 'required';
		cy.wrap(validateTypeOfDomain(typeOfDomain)).should('eq', errorMessage);
	});
  
	it('returns "Can only contain English letters, numbers and dashes" when typeOfDomain contains non-English characters', () => {
		const typeOfDomain = 'Type_123';
		const errorMessage = 'Can only contain English letters, numbers and dashes';
		cy.wrap(validateTypeOfDomain(typeOfDomain)).should('eq', errorMessage);
	});
  
	it('returns "A dash cannot appear at the end or at the beginning" when typeOfDomain starts or ends with a dash', () => {
		const typeOfDomain = '-Type-';
		const errorMessage = 'A dash cannot appear at the end or at the beginning';
		cy.wrap(validateTypeOfDomain(typeOfDomain)).should('eq', errorMessage);
	});
  
	it('returns an empty string when typeOfDomain is valid', () => {
		const typeOfDomain = 'Valid-Type';
		const errorMessage = '';
		cy.wrap(validateTypeOfDomain(typeOfDomain)).should('eq', errorMessage);
	});
});