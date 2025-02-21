import { Request, Response } from "express";
import { updateTransactionsStatusService } from "../services/transaction-update.service";

export const updateTransactionsStatus = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { transacaoIds } = req.body;
    const updatedData = await updateTransactionsStatusService(transacaoIds);

    return res.status(200).json({
      message: updatedData,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao atualizar transações." });
  }
};
