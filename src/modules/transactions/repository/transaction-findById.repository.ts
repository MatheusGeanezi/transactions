import { Types } from "mongoose";
import { Transaction } from "../models/transaction.model";

export const findTransactionsByIds = async (transactionIds: string[]) => {
  const objectIds = transactionIds.map((id) => new Types.ObjectId(id));
  return await Transaction.find({ _id: { $in: objectIds } });
};
