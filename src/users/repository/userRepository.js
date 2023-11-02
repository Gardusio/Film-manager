import { db } from "../../../server.js";
import bcrypt from 'bcryptjs'
import { selectByEmail, selectById } from "./queries.js";


const findById = (id) => {
    return new Promise((resolve, reject) => {
        db.get(selectById, [id], (err, row) => {
            if (err)
                reject(err);
            else if (row === undefined)
                resolve({ error: 'User not found.' });
            else {
                // By default, the local strategy looks for "username": 
                // for simplicity, instead of using "email", we create an object with that property.
                const user = { id: row.id, email: row.email, name: row.name }
                resolve(user);
            }
        });
    });
};

const findByEmail = (email) => {
    return new Promise((resolve, reject) => {
        db.get(selectByEmail, [email], (err, row) => {
            if (err) {
                reject(err);
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
