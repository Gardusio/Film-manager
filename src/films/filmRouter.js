import { Router } from "express"
import { getPagination } from "../utils/pagination/paginationMiddleware.js";
import { getPublicFilm, getPublicFilms } from "./filmController.js";
import { asyncHandle } from "../utils/errors/asyncHandler.js";
import { isLoggedIn } from "../auth/authMiddlewares.js";
import { validateResponse } from "../utils/validation/validator.js";

const filmRouter = Router();

filmRouter.get("/public", getPagination, asyncHandle(getPublicFilms), validateResponse("schema"))
filmRouter.get("/public/:id", asyncHandle(getPublicFilm), validateResponse("schema"))

filmRouter.post("/", isLoggedIn, asyncHandle(() => console.log("eo")));

export { filmRouter }