import { FilmNotFound } from "./filmErrors.js";
import { findAll, findAllPublic, findById } from "./repository/filmRepository.js"

const getAll = async (pagination) => {
    return await findAll(pagination);
}

const getAllPublic = async (pagination) => {
    return await findAllPublic(pagination);
}

const getPublicById = async (id) => {
    const film = await getById(id);

    if (film.private) throw new FilmNotFound("No public film with this id");

    return film
}

const getById = async (id) => {
    const film = await findById(id);

    if (!film) throw new FilmNotFound()

    return film
}


export { getAll, getAllPublic, getPublicById }