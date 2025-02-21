# Transaction API

Esta é uma API de transações desenvolvida em Node.js com TypeScript, utilizando MongoDB como banco de dados e Mongoose para modelagem de dados. A documentação da API é gerada automaticamente pelo Swagger.

## Requisitos

Antes de começar, certifique-se de ter instalado os seguintes requisitos:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/) (gerenciadores de pacotes)
- [MongoDB](https://www.mongodb.com/) (banco de dados)
- [Git](https://git-scm.com/) (para clonar o repositório)

## Instalação

Siga os passos abaixo para configurar e executar o projeto localmente.

### 1. Clonar o repositório

Se você estiver usando Git, clone o repositório para o seu ambiente local:

```bash
git clone https://github.com/MatheusGeanezi/transactions.git
cd transactions

npm install
# ou
yarn install

PORT=3000
MONGO_URI=mongodb://localhost:27017/applause
# ou
env.example

documentação http://localhost:3000/api-docs

