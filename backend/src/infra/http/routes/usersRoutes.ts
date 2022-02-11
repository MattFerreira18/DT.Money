import { Router } from "express";

import { CreateUserCore } from "src/modules/users/useCases/createUser/CreateUserCore";
import { GetUserProfileCore } from "src/modules/users/useCases/getUserProfile/GetUserProfileCore";
import { updateUserCore } from "src/modules/users/useCases/updateUser/UpdateUserCore";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const usersRoutes = Router();

usersRoutes
  .post('/', (req, res, next) => CreateUserCore.init(req, res, next))
  .patch('/',
    ensureAuthenticated,
    (req, res, next) => updateUserCore.init(req, res, next)
  )
  .get(
    '/profile',
    ensureAuthenticated,
    (req, res, next) => GetUserProfileCore.init(req, res, next),
  );

export { usersRoutes }
