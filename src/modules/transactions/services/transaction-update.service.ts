import { AppError } from "../../../utils/CustomError";
import { TransactionStatus } from "../models/transaction.model";
import { findTransactionsByIds } from "../repository/transaction-findById.repository";
import { updateTransactionsStatusRepository } from "../repository/transaction-update.repository";

export const updateTransactionsStatusService = async (
  transactionIds: string[]
): Promise<any> => {
  if (!Array.isArray(transactionIds) || transactionIds.length === 0) {
    throw new AppError("Por favor, envie um array de IDs de transações.", 400);
  }

  const transactions = await findTransactionsByIds(transactionIds);

  if (transactions.length === 0) {
    throw new Error("Nenhuma transação encontrada para os IDs fornecidos.");
  }

  const transactionsToUpdate = transactions.filter(
    (transaction) =>
      transaction.status === TransactionStatus.PENDING ||
      transaction.status === TransactionStatus.REPROVED
  );

  if (transactionsToUpdate.length === 0) {
    throw new AppError(
      "Nenhuma transação elegível para atualização de status.",
      404
    );
  }

  const statusMap: Record<string, TransactionStatus> = {
    pendente: TransactionStatus.APPROVED,
    reprovado: TransactionStatus.PENDING,
  };

  const bulkUpdateOperations = transactionsToUpdate.map((transaction) => ({
    updateOne: {
      filter: { _id: transaction._id, status: transaction.status },
      update: { $set: { status: statusMap[transaction.status] } },
    },
  }));

  const updatedCount = await updateTransactionsStatusRepository(
    bulkUpdateOperations
  );

  return {
    message: `${updatedCount} transações atualizadas.`,
  };
};
