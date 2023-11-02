import passport from "passport";
import bcrypt from "bcryptjs"
import { getByEmail } from "../users/userService.js";
import dotenv from "dotenv"
import { BadCredentials } from "./errors/errors.js";

dotenv.config()


const authenticateRequest = async (email, password, callback) => {
    try {
        const user = await getByEmail(email, password)

        if (!user || !await bcrypt.compare(password, user.password)) throw new BadCredentials();

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

            const user = req.user
            return res.json({
                id: user.id,
                name: user.name,
                email: user.email,
                resource_location: process.env.BASE_URL + "/users/" + user.id
            });
        });
    })(req, res, next)
}

const doLogout = (req, res) => {
    req.logout(() => {
        res.status(200).json({ message: "Logged Out" });
    });
}

export { doLogin, doLogout, authenticateRequest }