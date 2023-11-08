import { mapToLinks } from "../utils/hateos/linksMapper.js";
import dotenv from 'dotenv'

dotenv.config()
const REVIEWS_PATH = process.env.REVIEWS_PATH

// TODO: Refactor static constant api paths
const toReviewsResponse = (someReviews, filmId) => {
    const selfRef = filmId ? `${REVIEWS_PATH}/${filmId}` : REVIEWS_PATH // all existing reviews

    const reviewsResponse = {
        reviews: someReviews.map(review => toReviewResponse(review)),
        links: mapToLinks(selfRef)
    }

    return reviewsResponse
}

const toReviewResponse = (aReview) => {
    return {
        review: { ...aReview },
        links: mapToLinks(`${REVIEWS_PATH}/${aReview.filmId}/${aReview.reviewerId}`)
    }
}


export { toReviewResponse, toReviewsResponse }