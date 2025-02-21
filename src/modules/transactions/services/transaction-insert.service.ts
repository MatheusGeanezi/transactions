import { AppError } from "../../../utils/CustomError";
import { bulkInsertRepository } from "../repository/transaction-insert.repository";

export const bulkInsertService = async (
  transactions: any[]
): Promise<{ message: string }> => {
  if (!Array.isArray(transactions) || transactions.length === 0) {
    throw new AppError("Por favor, envie um array de transações.", 400);
  }

  const insertedCount = await bulkInsertRepository(transactions);
  return { message: `${insertedCount} transações inseridas com sucesso.` };
};
