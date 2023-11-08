import { mapToLinks } from "../utils/hateos/linksMapper.js";
import dotenv from 'dotenv'

dotenv.config()
const PUBLIC_FILMS_PATH = process.env.PUBLIC_FILMS_PATH
const FILMS_PATH = process.env.FILMS_PUBLIC_PATH
const REVIEWS_PATH = process.env.REVIEWS_PATH


const toFilmsResponse = (someFilms, justPublic) => {
    const selfRef = justPublic ? PUBLIC_FILMS_PATH : FILMS_PATH;

    const filmsResponse = {
        films: someFilms.map(film => toFilmResponse(film)),
        links: mapToLinks(selfRef)
    }

    return filmsResponse
}

const toFilmResponse = (aFilm) => {
    const selfRef = aFilm.private ? `${FILMS_PATH}/${aFilm.id}` : `${PUBLIC_FILMS_PATH}/${aFilm.id}`

    return {
        film: {
            id: aFilm.id,
            title: aFilm.title,
            ownerId: aFilm.owner
        },
        links: mapToLinks(selfRef, [{ rel: "reviews", href: `${REVIEWS_PATH}/${aFilm.id}` }])
    }
}


export { toFilmResponse, toFilmsResponse }