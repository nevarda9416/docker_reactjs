describe("testing the cart functionalities", () => {
    beforeEach(() => {
        cy.visit("/");
        cy.get('[data-test="close-popup-btn"]').click();
        cy.get('[data-test="login-btn"]').click();
        cy.get('[data-test="login-container"]').should("be.visible");
        cy.get('[data-test="input-username"]').type(Cypress.env('username'));
        cy.get('[data-test="input-password"]').type(Cypress.env('password'));
        cy.get('[data-test="input-submit"]').click();
    });
    it("cart opens and close", () => {
        cy.get('[data-test="cart-btn"]').click();
        cy.get('[data-test="cart-container"]').should("be.visible");
        cy.contains(/your cart is empty/i).should("be.visible");
        cy.get('[data-test="cart-close"]').click();
        cy.contains(/your cart is empty/i).should("not.exist");
    });
    it("data is added to and removed from the cart", () => {
        cy.get('[data-test="add-cart-btn-13"]').click();
        cy.get('[data-test="cart-item-count"]').should("have.text", "1");
        cy.get('[data-test="cart-btn"]').click();
        cy.get('[data-test="cart-remove-btn"]').click();
        cy.contains(/your cart is empty/i).should("be.visible");
        cy.get('[data-test="cart-close"]').click();
    });
    it("checkout and order confirm works", () => {
        cy.get('[data-test="add-cart-btn-12"]').first().click();
        cy.get('[data-test="cart-btn"]').click();
        cy.get('[data-test="cart-increase-btn"]').click();
        cy.get('[data-test="cart-item-quantity"]').should("have.text", "2");
        cy.get('[data-test="cart-reduce-btn"]').click();
        cy.get('[data-test="cart-item-quantity"]').should("have.text", "1");
        cy.get('[data-test="checkout-btn"]').click();
        cy.contains(/Welcome to the checkout section./i).should("be.visible");
        cy.get('[data-test="confirm-order-btn"]').click();
        cy.contains(/Welcome to the checkout section./i).should("not.exist");
        cy.get('[data-test="cart-item-count"]').should("have.text", "0");
    });
});