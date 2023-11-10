import { validator } from "../utils/validation/validator.js";

import ReviewsResponse from "../../api/schemas/dtos/reviews/ReviewsResponse.json" assert { type: 'json' };
import ReviewResponse from "../../api/schemas/dtos/reviews/ReviewResponse.json" assert { type: 'json' };

const ajvInstance = validator.ajv

ajvInstance.compile(ReviewResponse);

ajvInstance.compile(ReviewsResponse);

const validateReviewsResponse = (req, res, next) => {
    validator.validate({ response: ReviewsResponse })(res, res, next)

    res.status(res.statusCode).json(res.response)
}

const validateReviewResponse = (req, res, next) => {
    validator.validate({ response: ReviewResponse })(res, res, next)

    res.status(res.statusCode).json(res.response)
}

export { validateReviewResponse, validateReviewsResponse }