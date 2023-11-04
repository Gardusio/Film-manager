import { PublicFilmNotFound } from "./filmErrors.js";
import { findAll, findAllPublic, findById } from "./repository/filmRepository.js"

const getAll = async (pagination) => {
    return await findAll(pagination);
}

const getAllPublic = async (pagination) => {
    return await findAllPublic(pagination);
}

const getPublicById = async (id) => {
    const film = await findById(id);

    if (film.private) throw new PublicFilmNotFound();

    return film
}


export { getAll, getAllPublic, getPublicById }