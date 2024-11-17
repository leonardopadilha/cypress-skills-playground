/// <reference types="cypress" />

describe('Tables', () => {
  beforeEach(() => {
    cy.goHome()
    cy.doLogin()
    cy.goTo('/tables', 'Tables')
  })

  it('deve validar a linha do Github', () => {
/*     cy.get('table tbody')
        .should('contain', 'Github') */

        // 1004 é o id da linha do Github
      cy.contains('table tbody tr', '1004')
          .should('be.visible')
          .and('contain', 'Github')
          .and('contain', 'papitodev')
          .and('contain', 'Ativo')
  })

  it('deve remover uma rede social', () => {
    const name = 'Facebook'

    cy.contains('table tbody tr', '1002')
        .find('.remove-item')
        .click()

    cy.contains('button', 'Excluir')
        .click()

    cy.get('table tbody')
        .should('not.contain', name)
  })

  it('deve permanecer na tabela ao desistir da exclusão', () => {
    const name = 'Youtube'

    cy.contains('table tbody tr', '1005')
        .find('.remove-item')
        .click()

    cy.contains('button', 'Cancelar')
        .click()

    cy.get('table tbody')
        .should('contain', name)
  })

  it('Deve validar o link que abre o instagram e outra aba', () => {
    const id = 'instapapito'
    const link = `https://instagram.com/${id}`

    cy.contains('table tbody tr', id)
        .contains('a', 'Visitar')
        .should('have.attr', 'href', link)
        .and('have.attr', 'target', '_blank') // alias should
  })

  it.skip('Deve abrir o link que abre o instagram e outra aba e validar informações com invoke', () => {
    const id = 'instapapito'
    const link = `https://instagram.com/${id}`

    cy.contains('table tbody tr', id)
        .invoke('removeAttr', '_blank')
        
    cy.contains('a', 'Visitar')
        .click()
  })

})