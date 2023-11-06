const unauthorizedResponse = { message: 'Please login to access this resource' }

const isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }

    return res.status(401).json(unauthorizedResponse);
}

export { isLoggedIn }