import { findAll, findAllPublic } from "./repository/filmRepository.js"

const getAll = async (pagination) => {
    return await findAll(pagination);
}

const getAllPublic = async (pagination) => {
    return await findAllPublic(pagination);
}


export { getAll, getAllPublic }