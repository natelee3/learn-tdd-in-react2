describe('Creating a message', () => {
    it('Displays a message in the list', () => {
        cy.visit('http://localhost:3000');

        cy.get('[data-testid="messageText"]')
          .type('Test message');

        cy.get('[data-testid="sendButton"]')
          .click();

        cy.get('[data-testid="messageText"]')
          .should('have.value', '');

        cy.contains('Test message');
    });
});