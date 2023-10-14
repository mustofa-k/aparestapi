var connection = require('../koneksi')
var mysql = require('mysql')
var md5 = require('md5')
var response = require('../res')
var jwt = require('jsonwebtoken')
var config = require('../config/secret')
var ip = require('ip')

// CONTROLLER UNTUK REGISTER

exports.register = function (req, res) {
    var post = {
        username: req.body.username,
        email: req.body.email,
        password: md5(req.body.password),
        role: req.body.role,
        tanggal_daftar: new Date()
    }

    var query = "SELECT email FROM ?? WHERE ??";
    var table = ["user", "email", post.email];

    // Perubahan 1: Memperbaiki penggunaan mysql.format
    query = mysql.format(query, table);

    connection.query(query, function (error, rows) {
        if (error) {
            console.log(error);
        } else {
            if (rows.length == 0) {
                var query = "INSERT INTO ?? SET ?";
                var table = ["user"];

                // Perubahan 2: Memperbaiki penggunaan mysql.format
                query = mysql.format(query, table);

                connection.query(query, post, function (error, rows) {
                    if (error) {
                        console.log(error);
                    } else {
                        // Perubahan 3: Menggunakan fungsi response.oke
                        response.oke("Berhasil menambah user baru", {}, res);
                    }
                });
            } else {
                // Perubahan 4: Menggunakan fungsi response.error
                response.error("Email sudah terdaftar", res);
            }
        }
    });
}
