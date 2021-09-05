import { Router } from "express";

import { transactionRouter } from "./transactionRoutes";

const router = Router();

router.use('/transactions', transactionRouter);

export { router }
