import express from 'express';
import AutorController from '../controllers/autorController.js';

const routes = express.Router();

/**
 * @swagger
 * tags:
 *   name: Autores
 *   description: Gerenciamento de autores
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Autor:
 *       type: object
 *       required:
 *         - nome
 *       properties:
 *         id:
 *           type: string
 *           description: ID gerado automaticamente
 *         nome:
 *           type: string
 *           description: Nome do autor
 *         nacionalidade:
 *           type: string
 *           description: Nacionalidade do autor
 *       example:
 *         id: 60c72b2f9b1e8b3dfc8e7cdd
 *         nome: "Machado de Assis"
 *         nacionalidade: "Brasileira"
 */

/**
 * @swagger
 * /autores:
 *   get:
 *     summary: Retorna a lista de todos os autores
 *     tags: [Autores]
 *     responses:
 *       200:
 *         description: Lista de autores
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Autor'
 */
routes.get('/autores', AutorController.listarAutores);

/**
 * @swagger
 * /autores/{id}:
 *   get:
 *     summary: Retorna um autor pelo ID
 *     tags: [Autores]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do autor
 *     responses:
 *       200:
 *         description: Autor encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Autor'
 *       404:
 *         description: Autor não encontrado
 */
routes.get('/autores/:id', AutorController.listarAutorPorId);

/**
 * @swagger
 * /autores:
 *   post:
 *     summary: Cadastra um novo autor
 *     tags: [Autores]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Autor'
 *     responses:
 *       201:
 *         description: Autor cadastrado com sucesso
 *       500:
 *         description: Erro ao cadastrar autor
 */
routes.post('/autores', AutorController.cadastrarAutor);

/**
 * @swagger
 * /autores/{id}:
 *   put:
 *     summary: Atualiza um autor existente
 *     tags: [Autores]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do autor
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Autor'
 *     responses:
 *       200:
 *         description: Autor atualizado com sucesso
 *       404:
 *         description: Autor não encontrado
 */
routes.put('/autores/:id', AutorController.atualizarAutor);

/**
 * @swagger
 * /autores/{id}:
 *   delete:
 *     summary: Exclui um autor existente
 *     tags: [Autores]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do autor
 *     responses:
 *       200:
 *         description: Autor excluído com sucesso
 *       404:
 *         description: Autor não encontrado
 */
routes.delete('/autores/:id', AutorController.excluirAutor);

export default routes;
