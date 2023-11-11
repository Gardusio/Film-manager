class FilmNotFound extends Error {
    constructor(message) {
        super(message || "Film not found");
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