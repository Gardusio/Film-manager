import { validator } from "../utils/validation/validator.js";

import PublicFilmsResponse from "../../api/schemas/dtos/films/PublicFilmsResponse.json" assert { type: 'json' };
import PublicFilmResponse from "../../api/schemas/dtos/films/PublicFilmResponse.json" assert { type: 'json' };

const ajvInstance = validator.ajv

ajvInstance.compile(PublicFilmResponse);

ajvInstance.compile(PublicFilmsResponse);

const validateFilmsResponse = (req, res, next) => {
    validator.validate({ response: PublicFilmsResponse })(res, res, next)

    res.status(res.statusCode).json(res.response)
}

const validateFilmResponse = (req, res, next) => {
    validator.validate({ response: PublicFilmResponse })(res, res, next)

    res.status(res.statusCode).json(res.response)
}

export { validateFilmsResponse, validateFilmResponse }