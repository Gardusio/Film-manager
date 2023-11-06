import { dbAll, dbGet } from "../../utils/db/dbInterface.js";
import { pagedSelectAll, pagedSelectAllPublic, selectAll, selectAllPublic, selectById } from "./queryFactory.js";


const findAll = (pagination) => {
    const query = pagination ? pagedSelectAll(pagination) : selectAll

    return dbAll(query)
};

const findAllPublic = (pagination) => {
    const query = pagination ? pagedSelectAllPublic(pagination) : selectAllPublic

    return dbAll(query)
};


const findById = (id) => {
    const query = selectById(id);

    return dbGet(query);
}



export { findById, findAll, findAllPublic }