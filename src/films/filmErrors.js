class FilmNotFound extends Error {
    constructor(message) {
        super(message || "The film does not exist in the library");
        this.name = "FilmNotFound";
    }
}

const filmErrorHandler = (err, _, res, next) => {

    if (err && err instanceof FilmNotFound) {
        return res.status(404).json({ message: err.message })
    }

    next(err)
}


export { FilmNotFound, filmErrorHandler }