/// <reference types="cypress" />

describe('Iframe', () => {
  beforeEach(() => {
    cy.goHome()
    cy.doLogin()
    cy.goTo('/iframe', 'IFrame')
  })

  it('Deve preencher o nome em uma página que tem iframe', () => {
    cy.wait(1000)

    cy.get('[data-cy="iframe-inputs"]')
        .should('exist')
        .then(($iframe) => {
          const $body = $iframe.contents().find('body')

          cy.wrap($body)
              //.should('be.visible')
              .find('#fullname')
              .type('Fernando Papito')
        })
  })
})