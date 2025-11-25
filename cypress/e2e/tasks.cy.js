describe('Tasks E2E', () => {
  beforeEach(() => {
    cy.request('POST', '/tasks', { title: 'Clean DB' })
    // clear DB - this is a simple approach for demo; in production use fixtures or dedicated endpoints
    cy.visit('/')
  })

  it('creates a task via UI', () => {
    cy.get('#title').type('E2E Task')
    cy.get('#description').type('from cypress')
    cy.get('form').submit()
    cy.contains('E2E Task')
  })

  it('deletes a task via UI', () => {
    cy.get('#title').type('To Delete')
    cy.get('form').submit()
    cy.contains('To Delete')
    cy.get('button.del').first().click()
    cy.contains('To Delete').should('not.exist')
  })
})
