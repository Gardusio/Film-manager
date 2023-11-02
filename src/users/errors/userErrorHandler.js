import { UserNotFound } from "./errors.js"

const userErrorHandler = (err, _, res, next) => {

    if (err instanceof UserNotFound) {
        return res.status(404).send({ message: err.message })
    }

    next(err)
}


export default userErrorHandler