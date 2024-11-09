/// <reference types="cypress" />

describe('Date Picker', () => {
  beforeEach(() => {
    cy.goHome()
    cy.doLogin()
    cy.goTo('/date-picker', 'Date Picker')
  })

  it('deve adicionar a data de aniversário', () => {
    cy.get('input[placeholder="Escolha uma data"][readonly]')
        .click()

    cy.get('select[aria-label="Month"]')
        .select("Abril")

    cy.get('input[aria-label="Year"]')
        .type('1990')

    cy.get('span[aria-label="Abril 1, 1990"]')
        .click()
  })

  


})