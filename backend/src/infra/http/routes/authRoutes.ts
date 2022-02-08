import { Router } from "express";

import { AuthenticateUserCore } from "src/modules/users/useCases/authenticateUser/AuthenticateUserCore";

const authRoutes = Router();

authRoutes
  .post('/auth', (req, res, next) => AuthenticateUserCore.init(req, res, next));

export { authRoutes }
