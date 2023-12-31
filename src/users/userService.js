import { findById } from "./repository/userRepository.js";
import { UserNotFound } from "./userErrors.js";

const getById = async (id) => {
    const user = await findById(id)

    if (!user) throw new UserNotFound();

    return user;
}

export { getById }