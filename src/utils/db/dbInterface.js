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

const dbInsert = (query, params) => {
    return new Promise((resolve, reject) => {
        console.log("query", query)
        console.log("params", params)


        db.run(query, params, function (err) {
            if (err) {
                reject(err.message);
            } else {
                resolve(this.lastID);
            }
        });
    });
}

export { dbAll, dbGet, dbInsert }