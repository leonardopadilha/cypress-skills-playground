/// <reference types="cypress" />

describe('Login', () => {
  beforeEach(() => {
    cy.goHome()
  })

  it('Deve logar com sucesso', () => {
    cy.login('papito@cyskills.com.br', 'showtime')
    cy.userLoggedIn()
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

  it('Deve validar a obrigatoriedade do campo email', () => {
    cy.get('[data-cy=login-button]')
      .should('be.visible')
      .click()

    cy.noticeHave('Parece que você esqueceu de informar seu e-mail.')
  })

  it('Deve validar a obrigatoriedade do campo password', () => {
    cy.get('[data-cy=email]')
      .should('be.visible')
      .type('papito@cyskills.com.br')

      cy.get('[data-cy=login-button]')
        .should('be.visible')
        .click()

    cy.noticeHave('Por favor, digite sua senha para continuar.')
  })

})