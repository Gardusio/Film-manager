import { dbAll, dbGet } from "../../utils/db/dbInterface.js";
import { _selectByFilmId, pagedSelectAll, pagedSelectByFilmId, selectAll, selectByFilmId, selectById } from "./queryFactory.js";

/**
 *  TODO: CREATE A WRAPPER AROUND PROMISIFIED db.calls
 * 
*/
const findAll = (pagination) => {
    const query = pagination ? pagedSelectAll(pagination) : selectAll

    return dbAll(query);
};

const findByFilmId = (pagination, filmId) => {
    const query = pagination ? pagedSelectByFilmId(pagination, filmId) : selectByFilmId(filmId)

    return dbAll(query);
};


const findById = (filmId, reviewerId) => {
    const query = selectById(filmId, reviewerId);

    return dbGet(query);
}

export { findById, findByFilmId, findAll }