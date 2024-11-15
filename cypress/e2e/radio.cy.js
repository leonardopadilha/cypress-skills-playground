/// <reference types="cypress" />

describe('Radio Buttons', () => {
  beforeEach(() => {
    cy.goHome()
    cy.doLogin()
    cy.goTo('/radio', 'Radio Buttons')
  })

  it('Deve marcar apenas um framework', () => {
    const tools = ['Cypress', 'Playwright', 'Selenium Webdriver', 'Robot Framework', 'Jest']

    tools.forEach(tool => {
      cy.contains('label', tool)
      .click()
    })

  })
})