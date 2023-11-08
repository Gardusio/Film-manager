
import { Router } from "express"

import { validateLoginRequest } from "./authValidator.js";
import { doLogin, doLogout } from "./authController.js";
import { validateResponse } from "../utils/validation/validator.js";


const authRouter = Router();

authRouter.post("/login", validateLoginRequest, doLogin, validateResponse("user schema"))

authRouter.delete('/logout', doLogout);

export { authRouter }