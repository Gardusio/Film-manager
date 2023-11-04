import { Router } from "express"
import { getPagination } from "../utils/pagination/paginationMiddleware.js";
import { getPublicFilm, getPublicFilms } from "./filmController.js";
import { asyncHandle } from "../utils/errors/asyncHandler.js";

const filmRouter = Router();

filmRouter.get("/public", getPagination, getPublicFilms)

filmRouter.get("/public/:id", asyncHandle(getPublicFilm))

export { filmRouter }