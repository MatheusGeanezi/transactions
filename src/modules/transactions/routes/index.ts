import { Router } from "express";
import { bulkInsertTransactions } from "../controllers/transaction-insert.controller";
import { updateTransactionsStatus } from "../controllers/transaction-update.controller";
import { listTransactionsController } from "../controllers/transaction-list.controller";

const transactionRouter = Router();

/**
 * @swagger
 * /transaction/bulk-insert:
 *   post:
 *     summary: Realiza a inserção em massa de transações
 *     description: Realiza a inserção em massa de transações no sistema
 *     tags:
 *       - Transações
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               type: object
 *               properties:
 *                 usuario:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: "60d4f46d221f5131d4b06e9e"
 *                     nome:
 *                       type: string
 *                       example: "Adriano Silva"
 *                 tipo:
 *                   type: string
 *                   example: "compra"
 *                 valor:
 *                   type: number
 *                   example: 1500.50
 *                 moeda:
 *                   type: string
 *                   example: "BRL"
 *                 status:
 *                   type: string
 *                   example: "pendente"
 *     responses:
 *       201:
 *         description: Transações inseridas com sucesso
 *       400:
 *         description: Erro na requisição
 */
transactionRouter.post("/bulk-insert", bulkInsertTransactions);

/**
 * @swagger
 * /transaction/update-status:
 *   patch:
 *     summary: Atualiza o status das transações
 *     description: Atualiza o status das transações com base nos IDs fornecidos
 *     tags:
 *       - Transações
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               type: string
 *               example: "67b85999309c4b1b63d569bd"
 *     responses:
 *       200:
 *         description: Status das transações atualizados com sucesso
 *       400:
 *         description: Erro na requisição
 *       404:
 *         description: Nenhuma transação encontrada
 */
transactionRouter.patch("/update-status", updateTransactionsStatus);

/**
 * @swagger
 * /transaction/list:
 *   get:
 *     summary: Lista as transações com paginação
 *     description: Lista as transações com paginação, permitindo definir o número de páginas e limite de itens por página.
 *     tags:
 *       - Transações
 *     parameters:
 *       - name: page
 *         in: query
 *         description: Número da página
 *         required: false
 *         schema:
 *           type: integer
 *           example: 1
 *       - name: limit
 *         in: query
 *         description: Número de itens por página
 *         required: false
 *         schema:
 *           type: integer
 *           example: 10
 *     responses:
 *       200:
 *         description: Transações listadas com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 page:
 *                   type: integer
 *                   example: 1
 *                 totalPages:
 *                   type: integer
 *                   example: 5
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "654dd09834a54e1e98d4baff"
 *                       usuario:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: string
 *                             example: "654dcb2f34a54e1e98d4bafc"
 *                           nome:
 *                             type: string
 *                             example: "João Silva"
 *                       tipo:
 *                         type: string
 *                         example: "compra"
 *                       valor:
 *                         type: number
 *                         example: 1500.50
 *                       status:
 *                         type: string
 *                         example: "aprovado"
 */
transactionRouter.get("/list", listTransactionsController);

export default transactionRouter;
