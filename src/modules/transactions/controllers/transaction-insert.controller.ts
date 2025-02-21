import { Request, Response } from "express";
import { bulkInsertService } from "../services/transaction-insert.service";

export const bulkInsertTransactions = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const saveData = await bulkInsertService(req.body);
    return res.status(201).json(saveData);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao inserir transações." });
  }
};
