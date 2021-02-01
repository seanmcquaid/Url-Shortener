describe('Final Url', () => {
  it('Should produce a new url', () => {
    cy.visit('http://localhost:3000');

    cy.get('.sc-gKsewC').type('https://wwww.seanmmcquaid.com');

    cy.intercept('http://localhost:8080/shortenUrl', {
      fixture: 'newUrl.json',
    });

    cy.get('.sc-iBPRYJ').click();

    cy.get('.sc-eCssSg > :nth-child(1)').should(
      'have.text',
      'New Url : http://localhost:3000/02b5cef1-0eed-4963-8c26-e149e66f608d'
    );
  });
});
