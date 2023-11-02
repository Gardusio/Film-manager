class UserNotFound extends Error {
    constructor(message) {
        super(message || "User not Found");
        this.name = "UserNotFound";
    }
}

export { UserNotFound }