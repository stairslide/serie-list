describe('ListSerie', () => {
    beforeEach(() => {
        cy.intercept('GET', '**/series', { fixture: 'series.json' }).as('getAllSerie');
        cy.visit('http://localhost:3000/list');
    });

    it('should display series', () => {
        // Esperar pela interceptação da rota getAllSeries
        cy.wait('@getAllSerie').then(() => {
            cy.get('[data-testid="serie"]').should('have.length', 3);
        });
    });
});
