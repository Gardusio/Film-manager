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

export { validator, validateRequest }