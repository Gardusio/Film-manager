import { mapToLinks } from "../utils/hateos/linksMapper.js";

// TODO: Refactor static constant api paths
const toFilmsResponse = (someFilms, justPublic) => {
    const href = justPublic ? "/films/public" : "/films";

    const filmsResponse = {
        films: someFilms.map(film => toFilmResponse(film)),
        links: mapToLinks("self", href)
    }

    return filmsResponse
}

const toFilmResponse = (aFilm) => {
    const href = aFilm.private ? `/films/${aFilm.id}` : `/films/public/${aFilm.id}`

    return {
        film: {
            id: aFilm.id,
            title: aFilm.title,
            ownerId: aFilm.owner
        },
        links: [
            {
                rel: "self",
                href: href
            }
        ]
    }
}


export { toFilmResponse, toFilmsResponse }