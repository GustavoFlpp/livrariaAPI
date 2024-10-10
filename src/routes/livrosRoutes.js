import express from 'express';
import LivroController from '../controllers/livroController.js';

const routes = express.Router();

/**
 * @swagger
 * tags:
 *   name: Livros
 *   description: Gerenciamento de livros
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Livro:
 *       type: object
 *       required:
 *         - titulo
 *       properties:
 *         id:
 *           type: string
 *           description: ID gerado automaticamente
 *         titulo:
 *           type: string
 *           description: Título do livro
 *         editora:
 *           type: string
 *           description: Editora do livro
 *         preco:
 *           type: number
 *           description: Preço do livro
 *         paginas:
 *           type: number
 *           description: Número de páginas do livro
 *         autor:
 *           $ref: '#/components/schemas/Autor'
 *       example:
 *         id: 60c72b2f9b1e8b3dfc8e7cdd
 *         titulo: "Dom Casmurro"
 *         editora: "Editora X"
 *         preco: 39.90
 *         paginas: 256
 *         autor:
 *           id: "60c72b2f9b1e8b3dfc8e7cdd"
 *           nome: "Machado de Assis"
 *           nacionalidade: "Brasileira"
 */

/**
 * @swagger
 * /livros:
 *   get:
 *     summary: Retorna a lista de todos os livros
 *     tags: [Livros]
 *     responses:
 *       200:
 *         description: Lista de livros
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Livro'
 */
routes.get('/livros', LivroController.listarLivros);

/**
 * @swagger
 * /livros/{id}:
 *   get:
 *     summary: Retorna um livro pelo ID
 *     tags: [Livros]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do livro
 *     responses:
 *       200:
 *         description: Livro encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Livro'
 *       404:
 *         description: Livro não encontrado
 */
routes.get('/livros/:id', LivroController.listarLivroPorId);

/**
 * @swagger
 * /livros/busca:
 *   get:
 *     summary: Retorna livros filtrados pela editora
 *     tags: [Livros]
 *     parameters:
 *       - in: query
 *         name: editora
 *         schema:
 *           type: string
 *         required: true
 *         description: Editora do livro
 *     responses:
 *       200:
 *         description: Lista de livros filtrados
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Livro'
 *       404:
 *         description: Nenhum livro encontrado
 */
routes.get('/livros/busca', LivroController.listarLivrosPorEditora);

/**
 * @swagger
 * /livros:
 *   post:
 *     summary: Cadastra um novo livro
 *     tags: [Livros]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Livro'
 *     responses:
 *       201:
 *         description: Livro cadastrado com sucesso
 *       500:
 *         description: Erro ao cadastrar livro
 */
routes.post('/livros', LivroController.cadastrarLivro);

/**
 * @swagger
 * /livros/{id}:
 *   put:
 *     summary: Atualiza um livro existente
 *     tags: [Livros]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do livro
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Livro'
 *     responses:
 *       200:
 *         description: Livro atualizado com sucesso
 *       404:
 *         description: Livro não encontrado
 */
routes.put('/livros/:id', LivroController.atualizarLivro);

/**
 * @swagger
 * /livros/{id}:
 *   delete:
 *     summary: Exclui um livro existente
 *     tags: [Livros]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do livro
 *     responses:
 *       200:
 *         description: Livro excluído com sucesso
 *       404:
 *         description: Livro não encontrado
 */
routes.delete('/livros/:id', LivroController.excluirLivro);

export default routes;
