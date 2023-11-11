const selectAll = 'SELECT * FROM films';
const selectAllPublic = 'SELECT * FROM films WHERE private = 0';

const selectById = (id) => `SELECT * FROM films WHERE id=${id}`;

const pagedSelectAll = (pagination) => `SELECT * FROM films ORDER BY id LIMIT ${pagination.limit} OFFSET ${pagination.startIndex}`;

const pagedSelectAllPublic = (pagination) => `SELECT * FROM films WHERE private = 0 ORDER BY id LIMIT ${pagination.limit} OFFSET ${pagination.startIndex}`;

const insert = (filmFields) => {
    const insertFields = filmFields.map(([k, v]) => k.toString()).join(", ")
    const placeholders = Array.from({ length: Object.keys(filmFields).length }, () => '?').join(', ');
    return `INSERT INTO films (${insertFields}) VALUES (${placeholders})`;
}

export { selectAll, selectById, selectAllPublic, pagedSelectAll, pagedSelectAllPublic, insert }