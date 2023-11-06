const selectAll = 'SELECT * FROM reviews';
const _selectByFilmId = 'SELECT * FROM reviews WHERE filmId=?';

const selectById = (filmId, reviewerId) => `SELECT * FROM reviews WHERE filmId = ${filmId} AND reviewerId = ${reviewerId}`;

const selectByFilmId = (filmId) => `SELECT * FROM reviews WHERE filmId= ${filmId}`;

const pagedSelectAll = (pagination) => `SELECT * FROM reviews ORDER BY filmId LIMIT ${pagination.limit} OFFSET ${pagination.startIndex}`;

const pagedSelectByFilmId = (pagination, filmId) => `SELECT * FROM reviews WHERE filmId = ${filmId} ORDER BY rating LIMIT ${pagination.limit} OFFSET ${pagination.startIndex}`;


export { selectAll, selectByFilmId, _selectByFilmId, selectById, pagedSelectAll, pagedSelectByFilmId }