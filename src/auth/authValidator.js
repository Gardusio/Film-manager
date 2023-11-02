import { validator } from "../validation/validator.js";
import LoginRequestSchema from '../../api/schemas/dtos/auth/LoginRequest.json' assert { type: 'json' };

const validateLoginRequest = validator.validate({ body: LoginRequestSchema })

export { validateLoginRequest }