import { mapToLinks } from "../utils/hateos/linksMapper.js";

const BASE_URL = "/reviews/"

// TODO: Refactor static constant api paths
const toReviewsResponse = (someReviews, filmId) => {
    const href = filmId ? BASE_URL + filmId : BASE_URL // all existing reviews

    const reviewsResponse = {
        reviews: someReviews.map(review => toReviewResponse(review)),
        links: mapToLinks("self", href)
    }

    return reviewsResponse
}

const toReviewResponse = (aReview) => {
    return {
        review: { ...aReview },
        links: mapToLinks("self", BASE_URL + aReview.filmId + "/" + aReview.reviewerId)
    }
}


export { toReviewResponse, toReviewsResponse }