import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Livros e Autores',
      version: '1.0.0',
      description: 'API para gerenciamento de autores e livros',
      contact: {
        name: 'Gustavo Felippe Barbosa',
        email: 'gustavofelippeb5@gmail.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./src/routes/*.js'], // Caminho onde estão as rotas
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

export default swaggerDocs;
