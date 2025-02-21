import { Router } from "express";
import transactionRouter from "./modules/transactions/routes";

const router = Router();

router.use("/v1/transaction", transactionRouter);

export default router;
