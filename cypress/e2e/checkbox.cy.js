/// <reference types="cypress" />

describe('Checkbox', () => {
  beforeEach(() => {
    cy.goHome()

    cy.login('papito@cyskills.com.br', 'showtime')
    cy.userLoggedIn()

    cy.goTo('/checkbox', 'Checkbox')
  })

  it('deve marcar as linguagens que usam Node.js', () => {
    cy.get('input[value=1]')
        .parent()
        .click()

    cy.get('label[for=typescript]')
      .click()
  })

  it('Deve marcar todas as oções', () => {
    const langs = ['javascript', 'python', 'rust', 'go', 'typescript']

    langs.forEach(lang => {
      cy.get(`label[for=${lang}]`)
          .click()
    })
  })
})