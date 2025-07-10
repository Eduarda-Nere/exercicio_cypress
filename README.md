## 🚀 Como executar os testes

### 🔧 Instalação

Execute os seguintes comandos:

```bash
cd exercicio_cypress
npm init --yes
npm install --save-dev cypress@12.6.0
```

### ▶️ Execução dos Testes

Modo Headless (sem interface visual)<br>
Executa os testes diretamente no terminal, sem abrir a interface do Cypress:

```bash
npx cypress run --spec "cypress/e2e/contatos.cy.js"
```

Modo Interativo (com interface visual)<br>
Abre a interface do Cypress para você visualizar e executar os testes manualmente:

```bash
npx cypress open
