import { Validator } from "express-json-validator-middleware";
import Links from "../../../api/schemas/dtos/links.json" assert { type: 'json' };

const validator = new Validator({ allErrors: true });

const ajvInstance = validator.ajv

ajvInstance.addSchema(Links)


export { validator }