import { findAll, findByFilmId, findById } from "./repository/reviewRepository.js";

const getAllReviews = async (pagination) => {
    return await findAll(pagination);
}

const getFilmReviews = async (pagination, filmId) => {
    return await findByFilmId(pagination, filmId);
}

const getFilmReview = async (filmId, reviewerId) => {
    return await findById(filmId, reviewerId);
}


export { getFilmReview, getFilmReviews, getAllReviews }