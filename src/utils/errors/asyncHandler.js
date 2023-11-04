const asyncHandle = (routeHandler) => {
    return async (req, res, next) => {
        try {
            return await routeHandler(req, res);
        } catch (err) {
            next(err);
        }
    };
};


export { asyncHandle }