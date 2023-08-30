describe('Intercept Test', () => {
  it('Mocks a network request using cy.intercept()', () => {
    // Intercept the GET request to the API endpoint
    cy.intercept('GET', '/api/users', {
      statusCode: 200,
      body: [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
      ],
    }).as('getUsers');

    // Visit the page where the request will be triggered
    cy.visit('/path-to-your-page');

    // Assert that the user information is displayed on the page
    cy.get('.user-list').should('have.length', 2);
    cy.get('.user-list').contains('John Doe');
    cy.get('.user-list').contains('Jane Smith');

    // Wait for the intercepted request to complete
    cy.wait('@getUsers');
  });
});