// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add('backgroundLogin', () => {
    cy.setCookie(
        'PrestaShop-a30a9934ef476d11b6cc3c983616e364',
        'R6xmma6F4U6edNQuu67M0pcUrnYNBP%2B5tXZKQ0DBV%2FvIpx6uNsPDXALTMQmMpCtJcVHtY6EC4b1gTIXBv43xqK18oorstVB2ToKkQolrf9D3qAGSOTHYfUAK8gbWDN8cVYlCepN8H3Ebb4izCBPKY2VdmBGanuvSnztP9txlaH0cp9nzWIply%2BOZ89SMRSEpfx%2F0XjTHo868SF6Vz09tjVBCjYU28fX2YVnisrLdLrlBf8NdlmlJrpG9sL3o9PZYd4rRNdhkOmgReWQcSXapZEO8ECsr8zSp5WmcjXpOgNp%2FOTyEmdbMG9E4uBxGDRfT%2Ft0Dp6rrQNnONfz05LI%2BIXuSI0H3TSGcun2cXzSE4peh7GBatI46POypxE8az9eypOr5oIOdKP0jEIDwDkfBXSQoypYvY6VEEpH%2BaBItM04%3D000314'
    );
});