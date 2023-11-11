import { validator } from "../utils/validation/validator.js";

import PublicFilmsResponse from "../../api/schemas/dtos/films/PublicFilmsResponse.json" assert { type: 'json' };
import PublicFilmResponse from "../../api/schemas/dtos/films/PublicFilmResponse.json" assert { type: 'json' };
import CreateFilmRequest from "../../api/schemas/dtos/films/CreateFilmRequest.json" assert { type: 'json' };


const ajvInstance = validator.ajv

ajvInstance.compile(PublicFilmResponse);
ajvInstance.compile(PublicFilmsResponse);
ajvInstance.compile(CreateFilmRequest);

const validateFilmsResponse = (req, res, next) => {
    validator.validate({ response: PublicFilmsResponse })(res, res, next)

    res.status(res.statusCode).json(res.response)
}

const validateFilmResponse = (req, res, next) => {
    console.log("validate resp")
    validator.validate({ response: PublicFilmResponse })(res, res, next)

    res.status(res.statusCode).json(res.response)
}

const validateFilmRequest = validator.validate({ body: CreateFilmRequest })

export { validateFilmsResponse, validateFilmResponse, validateFilmRequest }