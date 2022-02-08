import { Router } from "express";
import { routeNotFound } from "../middlewares/routeNotFound";

import { transactionRouter } from "./transactionRoutes";

const router = Router();

router
  .use('/transactions', transactionRouter)
  .use(routeNotFound);

export { router }
