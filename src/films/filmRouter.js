import { Router } from "express"
import { getPagination } from "../utils/pagination/paginationMiddleware.js";
import { createNewFilm, getPrivateFilm, getPublicFilm, getPublicFilms } from "./filmController.js";
import { asyncHandle } from "../utils/errors/asyncHandler.js";
import { isLoggedIn } from "../auth/authMiddlewares.js";
import { validateFilmResponse, validateFilmsResponse, validateFilmRequest } from "./filmValidator.js";


const filmRouter = Router();


filmRouter.get("/public", getPagination, asyncHandle(getPublicFilms), validateFilmsResponse)
filmRouter.get("/public/:id", asyncHandle(getPublicFilm), validateFilmResponse)


/* Authenticated routes */
filmRouter.get("/private/:id", isLoggedIn, asyncHandle(getPrivateFilm), validateFilmResponse)
filmRouter.post("/private", isLoggedIn, validateFilmRequest, asyncHandle(createNewFilm), validateFilmResponse);


export { filmRouter }