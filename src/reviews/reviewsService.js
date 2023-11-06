import { findByFilmId, findById } from "./repository/reviewRepository.js";

const getFilmReviews = async (pagination, filmId) => {
    return await findByFilmId(pagination, filmId);
}

const getFilmReview = async (filmId, reviewerId) => {
    return await findById(filmId, reviewerId);
}


export { getFilmReview, getFilmReviews }