describe('Adding a trade', () => {
  it('lets the user add infor about a trade', () => {
    const nameInput = '[data-testid="nameInput"]';
    const qauntityInput = '[data-testid="quantityInput"]';
    const amountInput = '[data-testid="amountInput"]';
    const submit = '[data-testid="submit"]';

    cy.visit('/');

    cy.get(nameInput).type('Telia');
    cy.get(qauntityInput).type('100');
    cy.get(amountInput).type('2530');

    cy.get(submit).click();

    cy.get(nameInput).should('have.value', 'Telia');
    cy.get(qauntityInput).should('have.value', '');
    cy.get(amountInput).should('have.value', '');
  });
});
