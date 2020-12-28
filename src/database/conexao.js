const mysql = require('mysql')

const conexao = mysql.createConnection({
  "user": process.env.USER,
	"password": process.env.PASSWORD,
	"database": process.env.DATABASE,
	"host": process.env.HOST,
	"port": process.env.PORT
})

module.exports = conexao