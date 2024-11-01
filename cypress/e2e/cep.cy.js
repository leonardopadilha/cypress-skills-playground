/// <reference types="cypress" />

describe('CEP', () => {
  beforeEach(() => {
    cy.goHome()
    cy.doLogin()
    cy.goTo('/cep', 'CEP (API dos Correios)')
  });

  it('Deve cadastrar um endereço consumindo a API dos correios', () => {
    cy.get('input[name=cep]')
        .type('04534011')

    cy.contains('button', 'Cadastrar')
        .click()

    cy.get('input[name=logradouro]', { timeout: 7000 })
        .should('have.value', 'Rua Joaquim Floriano')

    cy.get('input[name=cidade]', { timeout: 7000 })
        .should('have.value', 'São Paulo')

    cy.get('input[name=estado]', { timeout: 7000 })
        .should('have.value', 'SP')
  });

  it('Deve cadastrar um endereço consumindo a API dos correios utilizando o intercept', () => {

    const address = {
      cep: '04534011',
      logradouro: 'Rua Joaquim Floriano',
      localidade: 'São Paulo',
      uf: 'SP'
    }

    cy.intercept('GET', `https://viacep.com.br/ws/${address.cep}/json/`, {
      statusCode: 200,
      body: address
    }).as('getCep')

    cy.get('input[name=cep]').type(address.cep)
    cy.contains('button', 'Cadastrar').click()

    cy.wait('@getCep')

    cy.get('input[name=logradouro]', { timeout: 7000 })
        .should('have.value', address.logradouro)

    cy.get('input[name=cidade]', { timeout: 7000 })
        .should('have.value', address.localidade)

    cy.get('input[name=estado]', { timeout: 7000 })
        .should('have.value', address.uf)
  });
})