var mysql = require('mysql');

var connMYSQL = function () {
    console.log("Conexão com bd estabelecida");
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'portal_noticias'
    });
};
module.exports = function () {
    console.log("Exportado Modulo de conexao");
    return connMYSQL;

};