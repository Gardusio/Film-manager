import { Router } from "express"
import { getPagination } from "../utils/pagination/paginationMiddleware.js";
import { getPublicFilm, getPublicFilms } from "./filmController.js";
import { asyncHandle } from "../utils/errors/asyncHandler.js";
import { isLoggedIn } from "../auth/authMiddlewares.js";
import { validateFilmResponse, validateFilmsResponse } from "./filmValidator.js";

const filmRouter = Router();

filmRouter.get("/public", getPagination, asyncHandle(getPublicFilms), validateFilmsResponse)
filmRouter.get("/public/:id", asyncHandle(getPublicFilm), validateFilmResponse)

filmRouter.post("/", isLoggedIn, asyncHandle(() => console.log("eo")));

export { filmRouter }