import { Router } from "express"
import { asyncHandle } from "../utils/errors/asyncHandler.js";
import { getPagination } from "../utils/pagination/paginationMiddleware.js";
import { getAllReviews, getFilmReview, getFilmReviews } from "./reviewsController.js";
import { validateResponse } from "../utils/validation/validator.js";

const reviewsRouter = Router();

reviewsRouter.get("/", getPagination, asyncHandle(getAllReviews), validateResponse("reviews schema"));

reviewsRouter.get("/:filmId", getPagination, asyncHandle(getFilmReviews), validateResponse("reviews schema"));

reviewsRouter.get("/:filmId/:reviewerId", asyncHandle(getFilmReview), validateResponse("review schema"))
export { reviewsRouter }