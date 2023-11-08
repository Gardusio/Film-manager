import { ok } from "../utils/http/httpService.js";
import { toFilmResponse, toFilmsResponse } from "./filmMapper.js";
import { getAllPublic, getPublicById } from "./filmService.js"

const getPublicFilms = async (req, res, next) => {

    const films = await getAllPublic(req.pagination);

    const justPublic = true
    const filmsResponse = toFilmsResponse(films, justPublic);

    res = ok(res, filmsResponse)
    next()
}

const getPublicFilm = async (req, res, next) => {

    const film = await getPublicById(parseInt(req.params.id))

    const isPublic = true
    const filmResponse = toFilmResponse(film, isPublic);

    res = ok(res, filmResponse)
    next()
}

export { getPublicFilms, getPublicFilm }