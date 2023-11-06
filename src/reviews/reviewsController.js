import { toReviewResponse, toReviewsResponse } from "./reviewsMapper.js"
import { getFilmReviews as getReviews } from "./reviewsService.js";
import { getFilmReview as getReview } from "./reviewsService.js";

const getAllReviews = async (req, res) => {
    const filmId = req.params.filmId;
    const reviews = await getReviews(req.pagination, filmId);

    const reviewsResponse = toReviewsResponse(reviews, filmId);

    return res.status(200).json(reviewsResponse);
}

const getFilmReviews = async (req, res) => {
    const filmId = req.params.filmId;
    const reviews = await getReviews(req.pagination, filmId);

    const reviewsResponse = toReviewsResponse(reviews, filmId);

    return res.status(200).json(reviewsResponse);
}


const getFilmReview = async (req, res) => {
    const { filmId, reviewerId } = req.params;

    const review = await getReview(filmId, reviewerId);

    const reviewResponse = toReviewResponse(review);

    return res.status(200).json(reviewResponse);
}


export { getFilmReview, getFilmReviews, getAllReviews }