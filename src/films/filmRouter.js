import { Router } from "express"
import { getPagination } from "../utils/pagination/paginationMiddleware.js";
import { getPublicFilms } from "./filmController.js";


const filmRouter = Router();

filmRouter.get("/public", getPagination, getPublicFilms)

export { filmRouter }