import { BadCredentials } from "./errors.js"

const authErrorHandler = (err, _, res, next) => {

    if (err instanceof BadCredentials) {
        return res.status(401).send({ message: err.message })
    }

    next(err)
}


export default authErrorHandler