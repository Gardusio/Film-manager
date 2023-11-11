import { Router } from "express"
import { getPagination } from "../utils/pagination/paginationMiddleware.js";
import { createNewFilm, getPrivateFilm, getPublicFilm, getPublicFilms, getPrivateFilms } from "./filmController.js";
import { asyncHandle } from "../utils/errors/asyncHandler.js";
import { isLoggedIn } from "../auth/authMiddlewares.js";
import { validateFilmResponse, validateFilmsResponse, validateFilmRequest, validatePrivateFilmsResponse, validatePrivateFilmResponse } from "./filmValidator.js";

// TODO REFACTOR THIS
const returnIfValid = (req, res, next) => {
    if (res.statusCode === 200)
        return res.status(200).json(res.response)
}

const filmRouter = Router();


filmRouter.get("/public", getPagination, asyncHandle(getPublicFilms), validateFilmsResponse, returnIfValid)
filmRouter.get("/public/:id", asyncHandle(getPublicFilm), validateFilmResponse, returnIfValid)


/* Authenticated routes */
filmRouter.get("/private/:id", isLoggedIn, asyncHandle(getPrivateFilm), validatePrivateFilmResponse, returnIfValid)
filmRouter.post("/private", isLoggedIn, validateFilmRequest, asyncHandle(createNewFilm), validateFilmResponse, returnIfValid);
filmRouter.get("/private", isLoggedIn, asyncHandle(getPrivateFilms), validatePrivateFilmsResponse, returnIfValid);

export { filmRouter }