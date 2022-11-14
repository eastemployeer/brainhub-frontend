import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I go to some non existing route {string}', (path) => {
  cy.visit(`${Cypress.config().baseUrl}${path}`);
});

Then('I am redirected to home page', () => {
  cy.location().should((loc) => {
    expect(loc.pathname).to.eq('/');
  });
});
