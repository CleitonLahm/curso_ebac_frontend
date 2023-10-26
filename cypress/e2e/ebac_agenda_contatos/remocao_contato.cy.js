/// <reference types="cypress" />

describe("testando de alteracao de contato", () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
  });

  it('deve remover um contato existente', () => {
    cy.get('.delete').eq(0).click();
  })



});
