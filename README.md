🚀 Como executar os testes

🔧 Instalação

cd exercicio_cypress
npm init --yes
npm install --save-dev cypress@12.6.0

▶️ Execução dos Testes

Modo Headless: Sem interface visual
npx cypress run --spec "cypress/e2e/contatos.cy.js"

Modo Interativo: Para abrir a interface do Cypress e executar os testes visualmente
npx cypress open
