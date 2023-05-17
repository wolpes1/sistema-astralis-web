const mysql = require('mysql');

let db_connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
});

db_connection.connect((err) => {
    if (error) {
        console.log("Conexão mal sucedida.", err);
    } else {
        console.log('Conexão bem sucedida.');
    }
});

