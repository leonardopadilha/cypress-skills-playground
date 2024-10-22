/// <reference types="cypress" />

describe('Textarea', () => {
  beforeEach(() => {
    cy.goHome()
  })

  it('deve preencher o campo de área de texto', () => {
    cy.login('papito@cyskills.com.br', 'showtime')
    cy.userLoggedIn()

    cy.goTo('/textarea', 'Textarea')

    cy.get('textarea[name=message]')
        .type('Boas vindas ao Cypress skills, um curso de formação completo para você aprender sobre automação de testes com o Cypress.')


  })

})