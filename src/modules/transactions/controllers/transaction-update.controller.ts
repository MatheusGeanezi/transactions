import { Request, Response } from "express";
import { updateTransactionsStatusService } from "../services/transaction-update.service";
import { AppError } from "../../../utils/CustomError";

export const updateTransactionsStatus = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const updatedData = await updateTransactionsStatusService(req.body);

    return res.status(200).json({
      message: updatedData,
    });
  } catch (error) {
    console.error(error);

    if (error instanceof AppError) {
      return res.status(error.statusCode).json({ error: error.message });
    }

    return res
      .status(500)
      .json({ error: "Erro interno ao atualizar transações." });
  }
};
