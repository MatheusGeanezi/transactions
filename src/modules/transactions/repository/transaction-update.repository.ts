import { Transaction } from "../models/transaction.model";

export const updateTransactionsStatusRepository = async (
  bulkUpdateOperations: any[]
): Promise<number> => {
  const result = await Transaction.bulkWrite(bulkUpdateOperations);
  return result.modifiedCount;
};
