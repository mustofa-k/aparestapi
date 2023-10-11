"use strict";

const response = require("./res");
const connection = require("./koneksi");

exports.index = function (req, res) {
  response.oke("Aplikasi REST API ku berjalan", null, res);
};

exports.getAllData = function (req, res) {
  connection.query("SELECT * FROM mahasiswa", function (error, rows, fields) {
    if (error) {
      console.error("Error executing query: " + error);
      response.error("Terjadi kesalahan saat mengambil data", res);
    } else {
      response.oke("Data berhasil ditampilkan", rows, res);
    }
  });
};

// Menampilkan data berdasarkan ID
exports.getDataById = function (req, res) {
  const id = req.params.id;

  connection.query("SELECT * FROM mahasiswa WHERE id_mahasiswa = ?", [id], function (error, rows, fields) {
    if (error) {
      console.error("Error executing query: " + error);
      response.error("Terjadi kesalahan saat mengambil data", res);
    } else {
      if (rows.length > 0) {
        response.oke("Data berhasil ditampilkan", rows, res);
      } else {
        response.error("Data tidak ditemukan", res);
      }
    }
  });
};
