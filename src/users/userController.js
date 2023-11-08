import { ok } from "../utils/http/httpService.js";
import { toUserResponse } from "./userMapper.js";
import { getById } from "./userService.js";

const getUser = async (req, res, next) => {
    const user = await getById(req.params.id);

    ok(res, toUserResponse(user))
    next()
}

export { getUser }