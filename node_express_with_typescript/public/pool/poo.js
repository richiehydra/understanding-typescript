"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'users',
    password: 'Keshav@2003',
    port: 5432,
});
pool.on('connect', () => {
    console.log('Connected to database');
});
pool.emit('connect');
exports.default = pool;
