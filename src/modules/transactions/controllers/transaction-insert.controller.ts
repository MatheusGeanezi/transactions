import { Request, Response } from "express";
import { bulkInsertService } from "../services/transaction-insert.service";
import { AppError } from "../../../utils/CustomError";

export const bulkInsertTransactions = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const saveData = await bulkInsertService(req.body);
    return res.status(201).json(saveData);
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({ error: error.message });
    }

    return res
      .status(500)
      .json({ error: "Erro interno ao inserir transações." });
  }
};
