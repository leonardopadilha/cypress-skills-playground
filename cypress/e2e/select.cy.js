/// <reference types="cypress" />

describe('Select', () => {
  beforeEach(() => {
    cy.goHome()
    cy.doLogin()
    cy.goTo('/select', 'Select')
  })

  it('deve selecionar o Cypress', () => {
    cy.contains('label', 'Selecione um Framework de Testes')
        .parent() // Seleciona o pai da tag referente o texto acima
        .find('select') // tag select
        .select('Cypress') // seleciona a opção Cypress
  })

  it('deve escolher as linguagens que usam Node.js', () => {
    const langs = ['JavaScript', 'TypeScript']

    cy.get('input[placeholder^="Linguagens de programação"]') // Começa com o texto....
        .click()

    langs.forEach(lang => {
      cy.contains('.option-item', lang)
          .click()
    })
  })

  it('deve selecionar Java, PHP e JavaScript', () => {
    const langs = ['Java', 'PHP', 'JavaScript']

    cy.get('input[placeholder^="Linguagens de programação"]') // Começa com o texto....
    .click()

    langs.forEach(lang => {
      // Expressão regular que significa inicia e termina com o termo pesquisado
      cy.contains('.option-item', new RegExp(`^${lang}$`))
          .click()
    })

    cy.get('.languages')
        .should('have.length', langs.length)
  })
})