class BadCredentials extends Error {
    constructor(message) {
        super(message || "Wrong email or password");
        this.name = "BadCredentials";
    }
}

export { BadCredentials }