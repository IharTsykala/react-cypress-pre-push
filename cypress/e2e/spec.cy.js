/* global cy */

describe('End-to-End Test Suite', () => {
	it('should navigate through the app', () => {
		cy.visit('http://localhost:3000');

		cy.contains('Learn React').should('exist');
		
		cy.contains('Learn React').click();
	});
});
