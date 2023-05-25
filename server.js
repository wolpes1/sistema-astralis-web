let bancoDeDados = require('mysql');

let conexao = bancoDeDados.createConnection({
    host: "localhost",
    user: "wolpes",
    password: "bancodedados"
});

conexao.connect(function(err) {
    if (err) throw err;
    console.log('Conectado.');
    conexao.query("CREATE DATABASE bancodedados", function (err,result) {
        if (err) throw err;
        console.log("Banco de dados criado.");
    });
});
