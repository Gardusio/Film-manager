import { db } from "../../../server.js";
import { DBError } from "./dbErrors.js";

const fetchDataOrDbError = (resolve, reject) => {
    return (err, data) => {
        if (err)
            reject(new DBError(err.message));
        else
            resolve(data);
    }
}

const dbAll = (query, params) => {
    return new Promise((resolve, reject) => {
        db.all(query, params, fetchDataOrDbError(resolve, reject));
    });
}

const dbGet = (query, params) => {
    return new Promise((resolve, reject) => {
        db.get(query, params, fetchDataOrDbError(resolve, reject));
    });
}

export { dbAll, dbGet }