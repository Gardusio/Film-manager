import { ValidationError } from "express-json-validator-middleware";
import { badRequest, serverError } from "../http/httpService.js";

class RequestValidationError extends ValidationError {
    constructor(validationErrors) {
        super(validationErrors);
        this.name = "RequestValidationError";
    }
}

class ResponseValidationError extends ValidationError {
    constructor(validationErrors) {
        super(validationErrors);
        this.name = "ResponseValidationError";
    }
}

const validationErrorsHandler = (err, _, res, next) => {
    if (err instanceof ValidationError) {
        if (err.validationErrors.response) {
            const responseError = new ResponseValidationError(err.validationErrors)
            next(responseError)
        }

        else if (err.validationErrors.body) {
            const requestError = new RequestValidationError(err.validationErrors)
            next(requestError)
        }
    }

    else next(err)
}

const requestValidationErrorHandler = (err, req, res, next) => {
    console.log("Request validation failed for", req.url)
    if (err instanceof RequestValidationError) {

        // This can be improved with more structured errors informations
        const errs = err.validationErrors.body.map(err => err.message)

        return badRequest(res, {
            message: "Request Validation Errors",
            errors: errs
        })
    }
    next(err)
}

const responseValidationErrorHandler = (err, req, res, next) => {
    if (err instanceof ResponseValidationError) {

        // more appropriate logging of the error/request id and so on..
        console.log("Error validating response object", err.validationErrors.response)
        res.statusCode = 500
        return serverError(res)
    }
    next(err)
}

export { RequestValidationError, ResponseValidationError, responseValidationErrorHandler, requestValidationErrorHandler, validationErrorsHandler }