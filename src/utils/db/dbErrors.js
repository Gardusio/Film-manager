import { serverError } from "../http/httpService.js";

class DBError extends Error {
    constructor(message) {
        super(message || "Query failed");
        this.name = "DBError";
    }
}

const dbErrorsHandler = (err, _, res, next) => {

    if (err && err instanceof DBError) {
        return serverError({ message: err.message })
    }
    next(err)

}

export { DBError, dbErrorsHandler }