import { validator } from "../utils/validation/validator.js"
import UserResponse from "../../api/schemas/dtos/users/UserResponse.json" assert { type: 'json' };

const validateUserResponse = (req, res, next) => {

    validator.validate({ response: UserResponse })(res, res, next)

    return res.status(res.statusCode).json(res.response)
}

export { validateUserResponse }