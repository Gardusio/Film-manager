const ok = (res, response) => {
    res.status(200)
    res.response = response
    return res
}

const badRequest = (res, payload) => {
    return res.status(400).json(payload)
}

const unauthorized = (res, payload) => {
    return res.status(401).json(payload)
}

const notFound = (res, payload) => {
    return res.status(500).json(payload)
}

const serverError = (res, payload) => {
    return res.status(500).json(payload)
}

export { ok, badRequest, unauthorized, notFound, serverError }