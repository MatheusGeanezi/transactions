import { Transaction } from "../models/transaction.model";

export const bulkInsertRepository = async (
  transactions: any[]
): Promise<any> => {
  const operations = transactions.map((transaction) => ({
    insertOne: {
      document: transaction,
    },
  }));

  const result = await Transaction.bulkWrite(operations);
  return result.insertedCount;
};
