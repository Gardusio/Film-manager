import { db } from "../../../server.js";
import { DBError } from "../../utils/errors/dbErrors.js";
import { pagedSelectAll, pagedSelectAllPublic, selectAll } from "./queryFactory.js";

const findAll = (pagination) => {
    const select = pagination ? pagedSelectAll(pagination) : selectAll

    return new Promise((resolve, reject) => {
        db.all(select, [], (err, rows) => {
            if (err)
                reject(new DBError(err.message));
            else {
                console.log(rows.map(r => "db"))
                resolve(rows);
            }
        });
    });
};

const findAllPublic = (pagination) => {
    const select = pagination ? pagedSelectAllPublic(pagination) : selectAllPublic

    return new Promise((resolve, reject) => {
        db.all(select, [], (err, rows) => {
            if (err)
                reject(new DBError(err.message));
            else {
                console.log(rows.map(r => "db"))
                resolve(rows);
            }
        });
    });
};

export { findAll, findAllPublic }