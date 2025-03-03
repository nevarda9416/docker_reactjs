describe("testing the products page", () => {
    beforeEach(() => {
        cy.intercept("GET", "https://dummyjson.com/products?limit=500").as("products");
        cy.visit("/products");
        cy.get('[data-test="close-popup-btn"]').click();
    });
    it("products page loads", () => {
        cy.contains("Products").should("be.visible");
    });
    it("products are loaded", () => {
        cy.wait("@products").then((interception) => {
            expect(interception.response.statusCode).to.be.equal(200);
            expect(interception.response.body).not.to.be.empty;
        });
    });
    it.only("products are sorted", () => {
        cy.wait("@products").then(() => {
            cy.get("select").select("desc");
            cy.get("select").select("default");
            cy.get("select").select("asc");
        });
    });
});