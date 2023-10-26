/// <reference types="cypress" />

describe('testando a inclusao', () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
  });

  it('deve adicionar um novo contato', () => {
    cy.get('[type="text"]').type('cleiton')
    cy.get('[type="email"]').type('cleiton@teste.com')
    cy.get('[type="tel"]').type('49 9999999')
    cy.get('.adicionar').click()
  })


})