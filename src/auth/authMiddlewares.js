const unauthorizedResponse = { message: 'Please login to access this resource' }

const isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        return res.status(401).json(unauthorizedResponse);
    }

    next();
}

const canAccessUserInfo = (req, res, next) => {
    console.log(req.params.id, req.user.id)
    if (req.params.id != req.user.id)
        return res.status(401).json({ message: 'You can not access this resource' })

    next()
}


export { isLoggedIn, canAccessUserInfo }