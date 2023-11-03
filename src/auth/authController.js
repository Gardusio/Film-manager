import passport from "passport";
import { toUserResponse } from "../users/userMapper.js";

const doLogin = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err)
            return next(err);
        if (!user) {
            return res.status(401).json(info);
        }

        req.login(user, (err) => {
            if (err)
                return next(err);

            return res.json(toUserResponse(req.user));
        });
    })(req, res, next)
}

const doLogout = (req, res) => {
    req.logout(() => {
        res.status(200).json({ message: "Logged Out" });
    });
}

export { doLogin, doLogout }