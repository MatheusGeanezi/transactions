import { bulkInsertRepository } from "../repository/transaction-insert.repository";

export const bulkInsertService = async (
  transactions: any[]
): Promise<{ message: string }> => {
  if (!Array.isArray(transactions) || transactions.length === 0) {
    throw new Error("Por favor, envie um array de transações.");
  }

  const insertedCount = await bulkInsertRepository(transactions);
  return { message: `${insertedCount} transações inseridas com sucesso.` };
};
