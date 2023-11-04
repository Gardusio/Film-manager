import { toFilmResponse, toFilmsResponse } from "./filmMapper.js";
import { getAll, getAllPublic, getPublicById } from "./filmService.js"

const getPublicFilms = async (req, res) => {

    const films = await getAllPublic(req.pagination);

    const justPublic = true
    const filmsResponse = toFilmsResponse(films, justPublic);

    return res.status(200).json(filmsResponse);

}

const getPublicFilm = async (req, res) => {

    const film = await getPublicById(parseInt(req.params.id))

    const isPublic = true
    return res.status(200).json(toFilmResponse(film, isPublic));
}

export { getPublicFilms, getPublicFilm }