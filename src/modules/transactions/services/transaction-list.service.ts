import { Transaction } from "../models/transaction.model";

export const listTransactionsService = async (
  page: number,
  limit: number
): Promise<{ page: number; totalPages: number; data: any[] }> => {
  const pageNumber = page > 0 ? page : 1;
  const pageLimit = limit > 0 ? limit : 10;

  const totalTransactions = await Transaction.countDocuments();

  const totalPages = Math.ceil(totalTransactions / pageLimit);

  const transactions = await Transaction.find()
    .skip((pageNumber - 1) * pageLimit)
    .limit(pageLimit)
    .sort({ createdAt: 1 })
    .select("-createdAt -updatedAt");

  return {
    page: pageNumber,
    totalPages,
    data: transactions,
  };
};
