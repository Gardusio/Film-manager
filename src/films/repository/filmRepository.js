import { dbAll, dbGet, dbInsert } from "../../utils/db/dbInterface.js";
import { pagedSelectAll, pagedSelectAllPublic, selectAll, selectAllPublic, selectById, insert, pagedSelectAllPrivate, selectAllPrivate } from "./queryFactory.js";


const findAll = (pagination) => {
    const query = pagination ? pagedSelectAll(pagination) : selectAll

    return dbAll(query)
};

const findAllPublic = (pagination) => {
    const query = pagination ? pagedSelectAllPublic(pagination) : selectAllPublic

    return dbAll(query)
};

const findAllPrivate = (pagination, userId) => {
    const query = pagination ? pagedSelectAllPrivate(pagination, userId) : selectAllPrivate(userId)

    return dbAll(query)
};


const findById = (id) => {
    const query = selectById(id);

    return dbGet(query);
}

const save = (film) => {
    const params = Object.entries(film)
    const query = insert(params)

    return dbInsert(query, params.map(([k, v]) => v))
}



export { findById, findAll, findAllPublic, save, findAllPrivate }