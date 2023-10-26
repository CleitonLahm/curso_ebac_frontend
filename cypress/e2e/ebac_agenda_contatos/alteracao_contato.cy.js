/// <reference types="cypress" />

describe("testando de alteracao de contato", () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
  });

  it('verificar se o contato foi editado', () => {
    cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
    cy.get('[type="text"]').clear().type('novo nome')
    cy.get('[type="email"]').clear().type('novoEmail@teste.com')
    cy.get('[type="tel"]').clear().type('novo numero')
    cy.get('.alterar').click()

  })


});
