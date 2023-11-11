import { mapToLinks } from "../utils/hateos/linksMapper.js";
import dotenv from 'dotenv'

dotenv.config()
const PUBLIC_FILMS_PATH = process.env.PUBLIC_FILMS_PATH
const FILMS_PATH = process.env.FILMS_PATH
const REVIEWS_PATH = process.env.REVIEWS_PATH


const toFilmsResponse = (someFilms, justPublic) => {
    const selfRef = justPublic ? PUBLIC_FILMS_PATH : FILMS_PATH;
    const filmsData = justPublic ?
        someFilms.map(film => toFilmResponse(film)) :
        someFilms.map(film => toPrivateFilmResponse(film))

    const filmsResponse = {
        films: filmsData || [],
        links: mapToLinks(selfRef)
    }

    return filmsResponse
}

// HERE
const toFilmResponse = (aFilm) => {
    const selfRef = `${PUBLIC_FILMS_PATH}/${aFilm.id}`

    return {
        film: {
            id: aFilm.id,
            title: aFilm.title,
            ownerId: aFilm.owner
        },
        links: mapToLinks(selfRef, [{ rel: "reviews", href: `${REVIEWS_PATH}/${aFilm.id}` }])
    }
}

const toPrivateFilmResponse = (aFilm) => {
    const selfRef = `${FILMS_PATH}/${aFilm.id}`

    return {
        film: {
            id: aFilm.id,
            title: aFilm.title,
            ownerId: aFilm.owner,
            rating: aFilm.rating,
            watchDate: aFilm.watchDate,
            favorite: aFilm.favorite == 0 ? false : true
        },
        links: mapToLinks(selfRef, [{ rel: "reviews", href: `${REVIEWS_PATH}/${aFilm.id}` }])
    }
}


export { toFilmResponse, toFilmsResponse, toPrivateFilmResponse }