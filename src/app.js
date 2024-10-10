import express from 'express';
import conectaNaDatabase from './config/dbConnect.js';
import routes from './routes/index.js';
import swaggerDocs from './swaggerConfig.js';
import swaggerUi from 'swagger-ui-express';

const conexao = await conectaNaDatabase();

conexao.on('error', erro => {
  console.error('erro de conexão', erro);
});

conexao.once('open', () => {
  console.log('Conexão com o banco feita com sucesso!');
});

const app = express();
routes(app);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

export default app;
