import { Router } from "express"
import { asyncHandle } from "../utils/errors/asyncHandler.js";
import { getPagination } from "../utils/pagination/paginationMiddleware.js";
import { getAllReviews, getFilmReview, getFilmReviews } from "./reviewsController.js";
import { validateReviewResponse, validateReviewsResponse } from "./reviewsValidator.js";


const reviewsRouter = Router();

reviewsRouter.get("/", getPagination, asyncHandle(getAllReviews), validateReviewsResponse);

reviewsRouter.get("/:filmId", getPagination, asyncHandle(getFilmReviews), validateReviewsResponse);

reviewsRouter.get("/:filmId/:reviewerId", asyncHandle(getFilmReview), validateReviewResponse)

export { reviewsRouter }