import { app, port } from './app.js';
import sqlite from 'sqlite3';

const { Database } = sqlite;

const db = new Database('databaseV1.db', (err) => {
    if (err) throw err;
});

const startServer = async () => {
    try {
        app.listen(port, () => {
            console.log(`app listening on port ${port}!`);
        });
    } catch (error) {
        console.log(error);
    }
};

startServer();

export { db }