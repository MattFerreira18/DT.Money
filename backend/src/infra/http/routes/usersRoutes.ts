import { Router } from "express";

import { CreateUserCore } from "src/modules/users/useCases/createUser/CreateUserCore";

const usersRoutes = Router();

usersRoutes
  .post('/', (req, res, next) => CreateUserCore.init(req, res, next));

export { usersRoutes }
