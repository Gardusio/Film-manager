import { db } from "../../../server.js";
import { DBError } from "../../utils/errors/dbErrors.js";
import { _selectByFilmId, pagedSelectAll, pagedSelectByFilmId, selectAll, selectByFilmId, selectById } from "./queryFactory.js";

/**
 *  TODO: CREATE A WRAPPER AROUND PROMISIFIED db.calls
 * 
*/
const findAll = (pagination) => {
    const select = pagination ? pagedSelectAll(pagination) : selectAll

    return new Promise((resolve, reject) => {
        db.all(select, [], (err, rows) => {
            if (err)
                reject(new DBError(err.message));
            else
                resolve(rows);
        });
    });
};

const findByFilmId = (pagination, filmId) => {
    const select = pagination ? pagedSelectByFilmId(pagination, filmId) : selectByFilmId(filmId)

    return new Promise((resolve, reject) => {
        db.all(select, (err, rows) => {
            if (err)
                reject(new DBError(err.message));
            else
                resolve(rows);
        });
    });
};


const findById = (filmId, reviewerId) => {
    return new Promise((resolve, reject) => {
        db.get(selectById(filmId, reviewerId), (err, row) => {
            if (err)
                reject(new DBError(err.message));
            else
                resolve(row);
        });
    });
}

export { findById, findByFilmId, findAll }