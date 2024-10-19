/// <reference types="cypress" />

describe('Login', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080)

    cy.visit('https://playground.cyskills.com.br/login')

      cy.contains('h2', 'Faça login')
          .should('be.visible')
  })

  it('Deve logar com sucesso', () => {
    cy.login('papito@cyskills.com.br', 'showtime')

    cy.get('[data-cy="welcome-title"]')
        .should('be.visible')
        .and('have.text', 'Boas vindas ao Cypress Playground')

  })

  it('Não Deve logar com senha inválida', () => {
    cy.login('papito@cyskills.com.br', 'abc123')
    cy.noticeHave('E-mail ou senha incorretos. Por favor, tente novamente!')

  })

  it('Não Deve logar com email não cadastrado', () => {
    cy.login('email404@cyskills.com.br', 'abc123')
    cy.noticeHave('E-mail ou senha incorretos. Por favor, tente novamente!')
  })

  it('Não Deve logar com email incorreto', () => {
    cy.login('www.cyskills.com.br', 'abc123')
    cy.noticeHave('O formato do e-mail está incorreto. Por favor, verifique e tente novamente!')
  })

  it('Não Deve logar com senha menor de 5 caracteres', () => {
    cy.login('papito@cyskills.com.br', 'abc12')
    cy.noticeHave('A senha precisa ter pelo menos 6 caracteres. Vamos tentar de novo!')
  })

})

Cypress.Commands.add('login', (email, password) => {
  cy.get('[data-cy=email]')
    .should('be.visible')
    .type(email)

  cy.get('[data-cy=password]')
    .should('be.visible')
    .type(password)

  cy.get('[data-cy=login-button]')
    .should('be.visible')
    .click()
})

Cypress.Commands.add('noticeHave', (text) => {
  cy.get('.notice p')
    .should('be.visible')
    .and('have.text', text)
})