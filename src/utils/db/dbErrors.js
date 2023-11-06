class DBError extends Error {
    constructor(message) {
        super(message || "Query failed");
        this.name = "DBError";
    }
}

const dbErrorsHandler = (err, _, res, next) => {

    if (err instanceof DBError) {
        return res.status(500).send({ message: err.message })
    }

    next(err)
}

export { DBError, dbErrorsHandler }