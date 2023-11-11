import { getPublicById } from "../films/filmService.js";
import { ok } from "../utils/http/httpService.js";
import { toReviewResponse, toReviewsResponse } from "./reviewsMapper.js"
import { getFilmReviews as getReviews } from "./reviewsService.js";
import { getFilmReview as getReview } from "./reviewsService.js";
import { getAllReviews as getAll } from "./reviewsService.js";

const getAllReviews = async (req, res, next) => {
    console.log("wtf")
    const reviews = await getAll(req.pagination);

    const reviewsResponse = toReviewsResponse(reviews);

    ok(res, reviewsResponse);

    next()
}

const getFilmReviews = async (req, res, next) => {
    const filmId = req.params.filmId;

    const film = await getPublicById(filmId)

    const reviews = await getReviews(req.pagination, film.id);

    const reviewsResponse = toReviewsResponse(reviews, filmId);

    ok(res, reviewsResponse);
    //res.send(reviewsResponse)
    next()
}


const getFilmReview = async (req, res, next) => {
    const { filmId, reviewerId } = req.params;

    const review = await getReview(filmId, reviewerId);

    const reviewResponse = toReviewResponse(review);

    ok(res, reviewResponse);
    next()
}


export { getFilmReview, getFilmReviews, getAllReviews }