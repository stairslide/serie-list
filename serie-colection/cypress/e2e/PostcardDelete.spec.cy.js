describe('Delete Serie', () => {
  beforeEach(() => {
      cy.intercept('GET', '**/series', { fixture: 'series.json' }).as('getAllSerie');
      cy.visit('http://localhost:3000/list');
  });

  it('should display series', () => {
      cy.wait('@getAllSerie').then(() => {
          cy.get('[data-testid="serie"]').should('have.length', 3);
      });
  });
  
  it('should delete a serie', () => {
      cy.intercept('GET', '**/series', { fixture: 'series.json' }).as('getAllSerie');
      cy.intercept('DELETE', '**/series/*', {}).as('deleteSerie');

      cy.wait('@getAllSerie').then(() => {
          cy.get('[data-testid="delete-button"]').first().click();
          cy.get('[data-testid="confirm-delete-button"]').click();

          cy.wait('@deleteSerie').then(() => {
              cy.get('[data-testid="serie"]').should('have.length', 2);
          });
      });
  });
});