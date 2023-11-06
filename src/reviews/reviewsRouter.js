import { Router } from "express"
import { asyncHandle } from "../utils/errors/asyncHandler.js";
import { getPagination } from "../utils/pagination/paginationMiddleware.js";
import { getAllReviews, getFilmReview, getFilmReviews } from "./reviewsController.js";

const reviewsRouter = Router();

reviewsRouter.get("/", getPagination, asyncHandle(getAllReviews));

reviewsRouter.get("/:filmId", getPagination, asyncHandle(getFilmReviews));

reviewsRouter.get("/:filmId/:reviewerId", asyncHandle(getFilmReview))
export { reviewsRouter }