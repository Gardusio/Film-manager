import { FilmNotFound } from "./filmErrors.js";
import { findAll, findAllPrivate, findAllPublic, findById, save } from "./repository/filmRepository.js"

const getAll = async (pagination) => {
    return await findAll(pagination);
}

const getAllPublic = async (pagination) => {
    return await findAllPublic(pagination);
}

const getAllPrivate = async (pagination, userId) => {
    return await findAllPrivate(pagination, userId);
}

const getPublicById = async (id) => {
    const film = await getById(id);

    if (film.private) throw new FilmNotFound();

    return film
}

const getPrivateById = async (id, userId) => {
    const film = await getById(id);

    if (film.owner !== userId) throw new FilmNotFound();

    return film
}

const getById = async (id) => {
    const film = await findById(id);

    if (!film) throw new FilmNotFound()

    return film
}

const createFilm = async (film, userId) => {
    const filmEntity = { ...film, owner: userId }
    const filmId = await save(filmEntity)

    return {
        id: filmId,
        ...filmEntity
    }
}

export { createFilm, getAll, getAllPublic, getPublicById, getPrivateById, getAllPrivate }