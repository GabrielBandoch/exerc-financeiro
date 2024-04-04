const mysql = require('mysql2');

const conecta = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'financeiro'
});
module.exports = {conecta}