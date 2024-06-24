it('Asseration', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('get').click()

    cy.get('#query-btn')
        .should('contain', 'Button')
        .and('have.class', 'query-btn')
        .and('be.visible')
        .and('be.enabled')

    expect(true).to.be.true

    assert.equal(5, 5, 'Not equal')
    assert.strictEqual('4', 4, "Not equal")
})