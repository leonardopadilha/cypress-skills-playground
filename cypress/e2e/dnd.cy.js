/// <reference types="cypress" />

describe('Drag and Drop', () => {
  beforeEach(() => {
    cy.goHome()
    cy.doLogin()
    cy.goTo('/tasks', 'Task Board')
  })

  it('Deve finalizar uma tarefa com id', () => {
    // Propriedade -> draggable = true (Maneira correta de criar um drag and drop)
    const task = 'Definir requisitos do projeto'

    const dataTransfer = new DataTransfer()

    cy.get('[data-cy=1002]')
        .trigger('dragstart', {
          dataTransfer
        })

    cy.contains('h4', 'Done')
        .parent()
        .trigger('drop', {
          dataTransfer
        })

    cy.contains('h4', 'Done')
      .parent()
      .contains('div[draggable=true]', task)
      .should('be.visible')
  })

  it('Deve finalizar uma tarefa com título', () => {
    // Propriedade -> draggable = true (Maneira correta de criar um drag and drop)

    const task = 'Definir requisitos do projeto'

    const dataTransfer = new DataTransfer()

    cy.contains('div[draggable=true]', task)
        .trigger('dragstart', {
          dataTransfer
        })

    cy.contains('h4', 'Done')
        .parent()
        .trigger('drop', {
          dataTransfer
        })

    cy.contains('h4', 'Done')
        .parent()
        .contains('div[draggable=true]', task)
        .should('be.visible')
  })
})

