"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const steps_1 = require("cypress-cucumber-preprocessor/steps");
(0, steps_1.Given)('I go to home page', () => {
    cy.visit(`${Cypress.config().baseUrl}`);
});
(0, steps_1.Then)('I fill out form with proper data and click submit', () => {
    cy.get('[name="firstName"]').type("John");
    cy.get('[name="lastName"]').type("Appleseed");
    cy.get('[name="email"]').type("appleseed@gmail.com");
    cy.get('[name="date"]').type("2022-11-12");
    cy.contains('Submit').click();
});
(0, steps_1.Then)('I see new segment', () => {
    cy.get('.content').should('contain', 'Last request state');
});
(0, steps_1.Given)('I go to home page', () => {
    cy.visit(`${Cypress.config().baseUrl}`);
});
(0, steps_1.Then)('I click submit without filling form with data', () => {
    cy.contains('Submit').click();
});
(0, steps_1.Then)('I see proper validation error messages', () => {
    cy.get('.content')
        .should('contain', 'firstName is a required field')
        .should('contain', 'lastName is a required field')
        .should('contain', 'email is a required field')
        .should('contain', 'date is a required field');
});
(0, steps_1.Given)('I go to home page', () => {
    cy.visit(`${Cypress.config().baseUrl}`);
});
(0, steps_1.Then)('I fill out form with proper data and invalid email and click submit', () => {
    cy.get('[name="firstName"]').type("John");
    cy.get('[name="lastName"]').type("Appleseed");
    cy.get('[name="email"]').type("appleseed.com");
    cy.get('[name="date"]').type("2022-11-12");
    cy.contains('Submit').click();
});
(0, steps_1.Then)('I see error message about invalid email', () => {
    cy.get('.content').should('contain', 'email must be a valid email');
});
//# sourceMappingURL=stepDefinitions.js.map