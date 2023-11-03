import { toFilmsResponse } from "./filmMapper.js";
import { getAll, getAllPublic } from "./filmService.js"

const getPublicFilms = async (req, res) => {

    const films = await getAllPublic(req.pagination);

    const justPublic = true
    const filmsResponse = toFilmsResponse(films, justPublic);

    return res.status(200).json(filmsResponse);

}

export { getPublicFilms }