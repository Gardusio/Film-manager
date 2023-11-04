import { db } from "../../../server.js";
import { DBError } from "../../utils/errors/dbErrors.js";
import { _selectById, pagedSelectAll, pagedSelectAllPublic, selectAll, selectAllPublic, selectById } from "./queryFactory.js";

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

const findAllPublic = (pagination) => {
    const select = pagination ? pagedSelectAllPublic(pagination) : selectAllPublic

    return new Promise((resolve, reject) => {
        db.all(select, [], (err, rows) => {
            if (err)
                reject(new DBError(err.message));
            else
                resolve(rows);
        });
    });
};


const findById = (id) => {

    return new Promise((resolve, reject) => {
        db.get(_selectById, [id], (err, row) => {
            if (err)
                reject(new DBError(err.message));
            else
                resolve(row);
        });
    });
}

export { findById, findAll, findAllPublic }