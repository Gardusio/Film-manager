
const getPagination = (req, res, next) => {
    console.log("pagination mdw", req.query)
    const page = req.query.page || 1
    const pageNumber = parseInt(page);
    const pageSize = req.query.limit || 10;
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    // Attach pagination data to the request object
    const pagination = {
        page: pageNumber,
        limit: pageSize,
        startIndex,
        endIndex
    };

    req.pagination = pagination
    next(); // Call the next middleware
}

export { getPagination }