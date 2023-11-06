import { dbGet } from "../../utils/db/dbInterface.js";
import { selectByEmail, selectById } from "./queries.js";


const findById = (id) => {
    return dbGet(selectById, id);
};

const findByEmail = (email) => {
    return dbGet(selectByEmail, email);
};

export { findByEmail, findById }
