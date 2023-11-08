class PublicFilmNotFound extends Error {
    constructor(message) {
        super(message || "No public film with this id");
        this.name = "PublicFilmNotFound";
    }
}

const filmErrorHandler = (err, _, res, next) => {

    if (err && err instanceof PublicFilmNotFound) {
        return res.status(404).json({ message: err.message })
    }
    next(err)
}


export { PublicFilmNotFound, filmErrorHandler }