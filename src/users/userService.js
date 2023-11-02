import { UserNotFound } from "./errors/errors.js";
import { findByEmail } from "./repository/userRepository.js";


const getByEmail = async (email, password) => {
    return await findByEmail(email, password)
}

const getById = async (id) => {
    const user = await findById(id)

    if (!user) throw new UserNotFound();

    return user;
}

export { getByEmail, getById }