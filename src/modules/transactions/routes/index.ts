import { Router } from "express";
import { bulkInsertTransactions } from "../controllers/transaction-insert.controller";
import { updateTransactionsStatus } from "../controllers/transaction-update.controller";

const transactionRouter = Router();

transactionRouter.post("/bulk-insert", bulkInsertTransactions);
transactionRouter.patch("/update-status", updateTransactionsStatus);

export default transactionRouter;
