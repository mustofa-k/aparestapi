

const mysql = require('mysql')

// buat koneksi database

const conn = mysql.createConnection({
    host : "localhost",
    user : "root",
    password: "",
    database : 'dbmahasiswa'

})