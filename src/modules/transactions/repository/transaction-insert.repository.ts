import { Transaction } from "../models/transaction.model";

export const bulkInsertRepository = async (
  transactions: any[]
): Promise<number> => {
  const insertedTransactions = await Transaction.insertMany(transactions);
  return insertedTransactions.length;
};
