import { toUserResponse } from "./userMapper.js";
import { getById } from "./userService.js";

const getUser = async (req, res) => {
    const user = await getById(req.params.id);

    return res.status(200).json(toUserResponse(user))
}

export { getUser }