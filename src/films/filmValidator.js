import { validator } from "../utils/validation/validator.js";

import PublicFilmsResponse from "../../api/schemas/dtos/films/PublicFilmsResponse.json" assert { type: 'json' };
import PublicFilmResponse from "../../api/schemas/dtos/films/PublicFilmResponse.json" assert { type: 'json' };
import PrivateFilmsResponse from "../../api/schemas/dtos/films/PrivateFilmsResponse.json" assert { type: 'json' };
import PrivateFilmResponse from "../../api/schemas/dtos/films/PrivateFilmResponse.json" assert { type: 'json' };

import CreateFilmRequest from "../../api/schemas/dtos/films/CreateFilmRequest.json" assert { type: 'json' };


const ajvInstance = validator.ajv

ajvInstance.compile(PublicFilmResponse);
ajvInstance.compile(PublicFilmsResponse);
ajvInstance.compile(PrivateFilmResponse);
ajvInstance.compile(PrivateFilmsResponse);
ajvInstance.compile(CreateFilmRequest);


const validateFilmsResponse = (req, res, next) => {
    validator.validate({ response: PublicFilmsResponse })(res, res, next)
}

const validateFilmResponse = (req, res, next) => {
    validator.validate({ response: PublicFilmResponse })(res, res, next)
}

const validatePrivateFilmsResponse = (req, res, next) => {
    validator.validate({ response: PrivateFilmsResponse })(res, res, next)
}

const validatePrivateFilmResponse = (req, res, next) => {
    validator.validate({ response: PrivateFilmResponse })(res, res, next)
}

const validateFilmRequest = validator.validate({ body: CreateFilmRequest })


export { validateFilmsResponse, validatePrivateFilmResponse, validateFilmResponse, validateFilmRequest, validatePrivateFilmsResponse }