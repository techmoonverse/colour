const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: '21india',
    password: '21india',
    database: '21india',
});

export default connection;