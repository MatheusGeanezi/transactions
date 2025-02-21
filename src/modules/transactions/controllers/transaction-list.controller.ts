import { Request, Response } from "express";
import { listTransactionsService } from "../services/transaction-list.service";

export const listTransactionsController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;

    const result = await listTransactionsService(page, limit);

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar transações." });
  }
};
