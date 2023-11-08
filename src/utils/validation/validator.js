import { Validator, ValidationError } from "express-json-validator-middleware";

const validator = new Validator({ allErrors: true });

const validateRequest = (err, _, res, next) => {
    if (err instanceof ValidationError) {

        const errs = err.validationErrors.body.map(err => err.params)

        res.status(400).send({
            message: "Bad Request",
            errors: errs
        });
        next();
    } else next(err);
}

const validateResponse = (schema) => {
    return async (req, res, next) => {
        /* if responseObject !== validation schema then throw a ValidationError with status 500, log the missing fields*/
        const response = res.response;

        console.log("schema", schema)

        return res.json(response)
    }
}

export { validator, validateRequest, validateResponse }