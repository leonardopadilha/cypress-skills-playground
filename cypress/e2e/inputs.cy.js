/// <reference types="cypress" />

describe('Input Fields', () => {
  it('deve preencher o campo texto', () => {
    cy.viewport(1920, 1080)
    cy.visit('https://playground.cyskills.com.br')

    cy.login('papito@cyskills.com.br', 'showtime')
    cy.userLoggedIn()
  })
})