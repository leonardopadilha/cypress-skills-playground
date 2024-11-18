/// <reference types="cypress" />

describe('Tags', () => {
  beforeEach(() => {
    cy.goHome()
    cy.doLogin()
    cy.goTo('/tags', 'Tags')
  })

  it('deve adicionar algumas tags', () => {
    const tags = ['Cypress', 'JavaScript', 'Nodejs', 'Playwright', 'Jest', 'Mocha', 'Chai']

    tags.forEach(tag => {
      cy.get('.new-tag')
          .type(`${tag}{Enter}`)
          .should('have.value', '')

      cy.wait(500) // think time
    })

    tags.forEach(tag => {
      cy.get('.tag-input')
          .should('contain', tag)
    })

  })
})