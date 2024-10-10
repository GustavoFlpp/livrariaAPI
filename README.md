# 📚 Sistema de Gerenciamento de Livros e Autores

Este projeto é uma API RESTful desenvolvida com **Node.js**, **Express** e **MongoDB** para gerenciar informações sobre autores e livros. A aplicação suporta operações CRUD completas (Criar, Ler, Atualizar e Deletar) tanto para autores quanto para livros.

A API está documentada utilizando o **Swagger**, proporcionando uma interface interativa para explorar e testar as rotas.

## 🚀 Funcionalidades

- **Autores**:

  - Listar todos os autores
  - Buscar um autor por ID
  - Cadastrar um novo autor
  - Atualizar um autor existente
  - Excluir um autor

- **Livros**:
  - Listar todos os livros
  - Buscar um livro por ID
  - Buscar livros por editora
  - Cadastrar um novo livro
  - Atualizar um livro existente
  - Excluir um livro

## 🛠️ Tecnologias Utilizadas

- **Node.js** - Plataforma de execução de código JavaScript no lado do servidor.
- **Express.js** - Framework para construção de APIs com Node.js.
- **MongoDB** - Banco de dados NoSQL utilizado para armazenar as informações de livros e autores.
- **Mongoose** - Biblioteca para modelar os dados e gerenciar o acesso ao MongoDB.
- **Swagger** - Ferramenta para documentação e exploração interativa de APIs.
- **dotenv** - Gerenciamento de variáveis de ambiente.

## 📂 Estrutura do Projeto

O projeto está organizado da seguinte forma:

src/
├── config/ # Arquivos de configuração, incluindo a conexão com o banco de dados
├── controllers/ # Controladores com a lógica das requisições (CRUD de autores e livros)
├── models/ # Modelos do Mongoose para autores e livros
├── routes/ # Definição das rotas da aplicação
└── app.js # Configuração principal do Express

## 📋 Pré-requisitos

Para rodar este projeto em sua máquina, você precisará ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/en/) (versão 14 ou superior)
- [MongoDB](https://www.mongodb.com/) (local ou uma instância na nuvem)
- [Git](https://git-scm.com/)

## 🔧 Instalação e Execução

### 1. Clone o repositório

git clone https://github.com/seu-usuario/nome-do-repositorio.git

### 2. Instale as dependências

cd nome-do-repositorio
npm install

### 3. Configuração do Banco de Dados

Crie um arquivo .env na raiz do projeto e adicione a string de conexão com seu banco de dados MongoDB:

MONGO_URI=mongodb://seu-usuario:senha@host:porta/nome-do-banco
PORT=3000

### 4. Inicie o servidor

npm run dev

### 5. Acesse a documentação interativa (Swagger)

http://localhost:3000/api-docs

Essa interface do Swagger permite testar as rotas da API diretamente pela web, além de fornecer descrições detalhadas das operações e exemplos de dados.

## 📖 Endpoints

A lista completa de endpoints e suas descrições detalhadas pode ser encontrada na [documentação interativa do Swagger](http://localhost:3000/api-docs).

### Exemplos de Endpoints:

#### 📌 Autores

- **GET** `/autores` - Retorna uma lista de todos os autores.
- **GET** `/autores/{id}` - Retorna os detalhes de um autor específico pelo ID.
- **POST** `/autores` - Cria um novo autor.

#### 📌 Livros

- **GET** `/livros` - Retorna uma lista de todos os livros.
- **GET** `/livros/busca?editora={editora}` - Retorna uma lista de livros filtrados por editora.
- **POST** `/livros` - Cria um novo livro.

Para mais detalhes sobre como usar cada endpoint, parâmetros, e exemplos de resposta, consulte a [documentação do Swagger](http://localhost:3000/api-docs).

## 🧑‍💻 Como usar o Swagger

Com o **Swagger**, você pode:

- **Navegar** por todos os endpoints da API.
- **Visualizar** os esquemas de dados para autores e livros.
- **Testar** os endpoints diretamente da interface web, sem precisar usar outra ferramenta.
- **Entender** como a API responde em diferentes situações (200, 404, etc).

### Acessando a documentação do Swagger

Após iniciar o servidor, você pode acessar a documentação interativa da API no seguinte endereço:

http://localhost:3000/api-docs

## 🧑‍💻 Exemplos de Requisições

Aqui estão alguns exemplos de como fazer requisições HTTP diretamente, caso prefira utilizar ferramentas como **Postman** ou **Insomnia**:

### **Listar todos os autores**

GET /autores

Exemplo de resposta (200):

[
{
"id": "60c72b2f9b1e8b3dfc8e7cdd",
"nome": "Machado de Assis",
"nacionalidade": "Brasileira"
},
{
"id": "60c72b3f9b1e8b3dfc8e7cdf",
"nome": "Clarice Lispector",
"nacionalidade": "Ucraniana"
}
]

### ** Cadastrar um novo autor **

POST /autores

Exemplo de body(JSON):

{
"nome": "Jorge Amado",
"nacionalidade": "Brasileira"
}

### ** Atualizar um livro **

PUT /livros/{id}

Exemplo de body (JSON):

{
"titulo": "Dom Casmurro",
"editora": "Nova Editora",
"preco": 45.90,
"paginas": 320
}

## 🧑‍💻 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e enviar pull requests. Todas as formas de ajuda são bem aceitas para melhorar o projeto, seja adicionando novas funcionalidades, corrigindo bugs ou melhorando a documentação.
