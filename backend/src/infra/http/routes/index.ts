import { Router } from "express";

import { routeNotFound } from "../middlewares/routeNotFound";
import { authRoutes } from "./authRoutes";

import { transactionRoutes } from "./transactionRoutes";
import { usersRoutes } from "./usersRoutes";

const router = Router();

router
  .use('/', authRoutes)
  .use('/users', usersRoutes)
  .use('/transactions', transactionRoutes)
  .use(routeNotFound);

export { router }
