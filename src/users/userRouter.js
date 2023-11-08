import { Router } from "express"
import { asyncHandle } from "../utils/errors/asyncHandler.js";
import { isLoggedIn, canAccessUserInfo } from "../auth/authMiddlewares.js";
import { getUser } from "./userController.js";

const usersRouter = Router();

usersRouter.get("/:id", isLoggedIn, canAccessUserInfo, asyncHandle(getUser));

export { usersRouter }