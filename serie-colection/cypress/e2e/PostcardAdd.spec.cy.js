describe("SerieAdd", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/addserie");
  });

  it("should add a new serie", () => {
    cy.intercept("POST", "http://localhost:5000/series", {
      statusCode: 200,
      body: { id: 11, title: "Skins" }
    }).as("saveSerie");

    cy.get('input[name="title"]').type("Skins");
    cy.get('input[name="seasons"]').type("7");
    cy.get('input[name="releaseDate"]').type("2007-01-25");
    cy.get('input[name="director"]').type("Bryan Elsley");
    cy.get('input[name="production"]').type("Company Pictures");
    cy.get('input[name="category"]').type("Drama");
    cy.get('input[name="watchedAt"]').type("2025-10-25");

    cy.get("button").contains("Salvar").click();

    cy.wait("@saveSerie").then((interception) => {
      expect(interception.response.statusCode).to.equal(200);
    });

    cy.location("pathname").should("eq", "/list");
  });
});
