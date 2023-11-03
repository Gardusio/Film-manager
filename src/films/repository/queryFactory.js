const selectAll = 'SELECT * FROM films';

const selectAllPublic = 'SELECT * FROM films WHERE private = 0';

const pagedSelectAll = (pagination) => `SELECT * FROM films ORDER BY id LIMIT ${pagination.limit} OFFSET ${pagination.startIndex}`;

const pagedSelectAllPublic = (pagination) => `SELECT * FROM films WHERE private = 0 ORDER BY id LIMIT ${pagination.limit} OFFSET ${pagination.startIndex}`;


export { selectAll, selectAllPublic, pagedSelectAll, pagedSelectAllPublic }