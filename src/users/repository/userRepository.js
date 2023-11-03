import { db } from "../../../server.js";
import { DBError } from "../../utils/errors/dbErrors.js";
import { selectByEmail, selectById } from "./queries.js";


const findById = (id) => {
    return new Promise((resolve, reject) => {
        db.get(selectById, [id], (err, row) => {
            if (err)
                reject(new DBError(err.message));
            else if (row === undefined)
                resolve(false);
            else {
                const user = { id: row.id, email: row.email, name: row.name, password: row.hash }
                resolve(user);
            }
        });
    });
};

const findByEmail = (email) => {
    return new Promise((resolve, reject) => {
        db.get(selectByEmail, [email], (err, row) => {
            if (err) {
                reject(new DBError());
            } else if (row === undefined) {
                resolve(false);
            }
            else {
                const user = { id: row.id, email: row.email, name: row.name, password: row.hash };
                resolve(user)
            }
        })
    });
};

export { findByEmail, findById }
