class DBError extends Error {
    constructor(message) {
        super(message || "Query failed");
        this.name = "DBError";
    }
}

export { DBError }