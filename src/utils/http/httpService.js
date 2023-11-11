const ok = (res, response) => {
    res.response = response
    res.statusCode = 200
    return res;
}

const badRequest = (res, payload) => {
    return res.status(400).json(payload || { message: "Bad Request" })
}

const unauthorized = (res, payload) => {
    return res.status(401).json(payload || { message: "Unauthorized" })
}

const notFound = (res, payload) => {
    return res.status(404).json(payload || { message: "Not found" })
}

const serverError = (res, payload) => {
    res.statusCode = 500
    res.response = payload || { message: "Server has encountered an error" }
    return res;
}

export { ok, badRequest, unauthorized, notFound, serverError }