import passport from "passport";
import { toUserResponse } from "../users/userMapper.js";
import { ok, unauthorized } from "../utils/http/httpService.js";

const doLogin = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) return next(err);

        if (!user) return unauthorized(res, info);

        req.login(user, (err) => {
            if (err) return next(err);

            ok(res, toUserResponse(req.user));
            next()
        });
    })(req, res, next)
}

const doLogout = (req, res) => {
    req.logout(() => {
        ok(res, { message: "Logged Out" });
    });
}

export { doLogin, doLogout }