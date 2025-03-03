describe("testing the single product page", () => {
    beforeEach(() => {
        cy.intercept("GET", "https://dummyjson.com/products/47").as("product");
        cy.intercept("GET", "https://dummyjson.com/products/category/home-decoration").as("similar");
        cy.visit("/product/47");
        cy.get('[data-test="close-popup-btn"]').click();
    });
    it("page loads properly", () => {
        cy.contains(/about the product/i).should("be.visible");
    });
    it("product details loads successfully", () => {
        cy.wait("@product").then(() => {
            cy.contains(/but it will happen at such a time that there is a lot of work and pain/i).should("be.visible");
        });
    });
    it("buy now works perfectly", () => {
        cy.wait("@product").then(() => {
            cy.get('[data-test="login-btn"]').click();
            cy.get('[data-test="login-container"]').should("be.visible");
            cy.get('[data-test="input-username"]').type(Cypress.env('username'));
            cy.get('[data-test="input-password"]').type(Cypress.env('password'));
            cy.get('[data-test="input-submit"]').click();
            cy.get('[data-test="buy-now-btn"]').click();
            cy.get('[data-test="cart-item-quantity"]').should("have.text", "1");
            cy.get('[data-test="cart-close"]').click();
        });
    });
    it("add to wishlist works perfectly", () => {
        cy.wait("@product").then(() => {
            cy.get('[data-test="login-btn"]').click();
            cy.get('[data-test="login-container"]').should("be.visible");
            cy.get('[data-test="input-username"]').type(Cypress.env('username'));
            cy.get('[data-test="input-password"]').type(Cypress.env('password'));
            cy.get('[data-test="input-submit"]').click();
            cy.get('[data-test="add-to-wishlist-btn"]').click();
            cy.get('[data-test="username-popup"]').click();
            cy.get('[data-test="popup-content-list"]').should("be.visible");
            cy.get('[data-test="wishlist-container"]').click();
        });
    });
    it("reviews loads successfully", () => {
        cy.wait("@product").then(() => {
            cy.get('[data-test="review-item"]').should("have.length", 5);
        });
    });
    it("similar products loads successfully", () => {
        cy.wait("@similar").then(() => {
            cy.get('[data-test="product-card"]').should("have.length", 4);
        });
    });
});