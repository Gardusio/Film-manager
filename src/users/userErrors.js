class UserNotFound extends Error {
    constructor(message) {
        super(message || "User not Found");
        this.name = "UserNotFound";
    }
}

const userErrorHandler = (err, _, res, next) => {

    if (err && err instanceof UserNotFound) {
        return res.status(404).send({ message: err.message })
    }
    next(err)
}


export { UserNotFound, userErrorHandler }