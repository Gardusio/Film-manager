
import { Router } from "express"

import { validateLoginRequest } from "./authValidator.js";
import { doLogin, doLogout } from "./authController.js";
import { validateUserResponse } from "../users/userValidator.js";


const authRouter = Router();

authRouter.post("/login", validateLoginRequest, doLogin, validateUserResponse)

authRouter.delete('/logout', doLogout);

export { authRouter }