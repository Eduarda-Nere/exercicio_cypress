describe('Testes de CRUD para Contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/');
    });

    it('Deve incluir um novo contato', () => {
        cy.get('input[placeholder="Nome"]').type('Eduarda');
        cy.get('input[placeholder="Telefone"]').type('11999999999');
        cy.get('input[placeholder="E-mail"]').type('eduardanere890@gmail.com');
        cy.get('button.adicionar').click();
        cy.contains('Eduarda').should('exist');
    });

    it('Deve editar um contato existente', () => {
        cy.get('.edit').first().click();
        cy.get('input[placeholder="Nome"]').first().clear().type('Gian Souza');
        cy.get('button[type="submit"]').click();
        cy.contains('Gian Souza').should('exist');
    });

    it('Deve deletar um contato', () => {
        cy.contains('.contato ul.sc-eDDNvR li', 'Bruna Costa')
            .parents('.contato')
            .within(() => {
                cy.get('button.delete')
                    .should('be.visible')
                    .click({ force: true });
            });

        cy.contains('.contato ul.sc-eDDNvR li', 'Bruna Costa').should('not.exist');
    });

    after(() => {
        cy.on('window:alert', (conteudo) => {
            expect(conteudo).to.contain('Testes concluídos!');
        });

        cy.screenshot('tela-concluida');
    });

});