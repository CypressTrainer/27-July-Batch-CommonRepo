describe('User List', () => {
    it('displays an error message on API failure', () => {
      cy.intercept('GET', 'https://api.example.com/users', {
        statusCode: 500,
        body: 'Internal Server Error',
      }).as('getUserList');
  
      cy.visit('/'); // Assuming your app is loaded at the root URL
  
      cy.wait('@getUserList');
  
      cy.contains('Error fetching user data').should('be.visible');
    });
  
    it('displays user data correctly', () => {
      const mockUsers = [
        { id: 1, name: 'User 1' },
        { id: 2, name: 'User 2' },
        // ... other mock user data
      ];
  
      cy.intercept('GET', 'https://api.example.com/users', {
        statusCode: 200,
        body: mockUsers,
      }).as('getUserList');
  
      cy.visit('/');
  
      cy.wait('@getUserList');
  
      // Now you can assert that the user data is displayed correctly
      mockUsers.forEach(user => {
        cy.contains(user.name).should('be.visible');
      });
    });
  });