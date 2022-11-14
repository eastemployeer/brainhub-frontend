"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const steps_1 = require("cypress-cucumber-preprocessor/steps");
(0, steps_1.Given)('I go to some non existing route {string}', (path) => {
    cy.visit(`${Cypress.config().baseUrl}${path}`);
});
(0, steps_1.Then)('I am redirected to home page', () => {
    cy.location().should((loc) => {
        expect(loc.pathname).to.eq('/');
    });
});
//# sourceMappingURL=stepDefinitions.js.map