import { Router } from "express"
import { asyncHandle } from "../utils/errors/asyncHandler.js";
import { isLoggedIn, canAccessUserInfo } from "../auth/authMiddlewares.js";
import { getUser } from "./userController.js";
import { validateUserResponse } from "./userValidator.js";

const usersRouter = Router();

usersRouter.get("/:id", isLoggedIn, canAccessUserInfo, asyncHandle(getUser), validateUserResponse);

export { usersRouter }