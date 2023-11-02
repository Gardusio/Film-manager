
import { Router } from "express"

import { isLoggedIn } from "./authMiddlewares.js";
import { validateLoginRequest } from "./authValidator.js";
import { doLogin, doLogout } from "./authController.js";


const authRouter = Router();

authRouter.post("/login", validateLoginRequest, doLogin)

authRouter.delete('/logout', doLogout);

//authRouter.post('/protected', isLoggedIn, protectedR);

export { authRouter }