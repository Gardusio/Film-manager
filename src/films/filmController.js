import { ok } from "../utils/http/httpService.js";
import { toFilmResponse, toFilmsResponse, toPrivateFilmResponse } from "./filmMapper.js";
import { getAllPublic, getPublicById, createFilm, getPrivateById, getAllPrivate } from "./filmService.js"

const getPublicFilms = async (req, res, next) => {

    const films = await getAllPublic(req.pagination);

    const justPublic = true
    const filmsResponse = toFilmsResponse(films, justPublic);

    ok(res, filmsResponse)
    next()
}

const getPrivateFilms = async (req, res, next) => {

    const films = await getAllPrivate(req.pagination, req.user.id) || { films: [] };

    const justPublic = false
    const filmsResponse = toFilmsResponse(films, justPublic);

    ok(res, filmsResponse)
    next()
}

const getPublicFilm = async (req, res, next) => {

    const film = await getPublicById(parseInt(req.params.id))

    const isPublic = true
    const filmResponse = toFilmResponse(film, isPublic);

    ok(res, filmResponse)
    next()
}

const getPrivateFilm = async (req, res, next) => {

    const film = await getPrivateById(parseInt(req.params.id), req.user.id)

    const isPublic = false
    const filmResponse = toPrivateFilmResponse(film, isPublic);

    ok(res, filmResponse)
    next()
}

const createNewFilm = async (req, res, next) => {
    const film = await createFilm(req.body, req.user.id)

    const isPublic = !film.private
    const filmResponse = toFilmResponse(film, isPublic);

    ok(res, filmResponse)
    next()
}

export { getPublicFilms, getPublicFilm, createNewFilm, getPrivateFilm, getPrivateFilms }