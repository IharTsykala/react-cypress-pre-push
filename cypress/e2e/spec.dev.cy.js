/* global cy Cypress */

describe('End-to-End Test Suite Dev', () => {
	it('should navigate through the app', () => {
		const apiUrl = Cypress.env('DEV_HOST');
		
		cy.task('log', `DEV_HOST ${apiUrl}`)
		// cy.request(apiUrl + '/some-api-endpoint')
		// 	.then((response) => {
		// 		// Ваши проверки для ответа
		// 		expect(response.status).to.equal(200);
		// 	});
		
		cy.visit('http://localhost:3000');
		
		cy.contains('Learn React').should('exist');
		
		cy.contains('Learn React').click();
	});
});
