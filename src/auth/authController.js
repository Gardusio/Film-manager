import passport from "passport";
import bcrypt from "bcryptjs"
import { getByEmail } from "../users/userService.js";
import dotenv from "dotenv"
import { BadCredentials } from "./errors/errors.js";
import { toUserResponse } from "../users/userMapper.js";

dotenv.config()


const authenticateRequest = async (email, password, callback) => {
    try {
        const user = await getByEmail(email, password)

        if (!user || !await bcrypt.compare(password, user.hash)) throw new BadCredentials();

        return callback(null, user);
    } catch (err) {
        return callback(null, false, { message: err.message });
    }
}

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

export { doLogin, doLogout, authenticateRequest }