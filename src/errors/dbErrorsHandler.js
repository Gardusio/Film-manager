import { DBError } from "./errors.js"

const dbErrorsHandler = (err, _, res, next) => {

    if (err instanceof DBError) {
        return res.status(500).send({ message: err.message })
    }

    next(err)
}


export default dbErrorsHandler