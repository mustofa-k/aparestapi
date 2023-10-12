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

// menambah data

exports.addData = function (req, res) {
  const nim = req.body.nim;
  const nama = req.body.nama;
  const jurusan = req.body.jurusan;

  connection.query("INSERT INTO mahasiswa (nim,nama,jurusan) VALUES(?,?,?)", [nim, nama, jurusan], function (error, result) {
    if (error) {
      console.error("Error executing query: " + error);
      response.error("Terjadi kesalahan saat menambahkan data", res);
    } else {
      response.oke("Data berhasil ditambahkan", result, res);
    }
  });
};

// mengubah data

exports.updateData = function (req, res) {
  const id = req.body.id_mahasiswa;
  const nim = req.body.nim;
  const nama = req.body.nama;
  const jurusan = req.body.jurusan;

  connection.query("UPDATE mahasiswa SET nim=?, nama=?, jurusan=? WHERE id_mahasiswa=?", [nim, nama, jurusan, id], function (error, result) {
    if (error) {
      console.error("Error executing query: " + error);
      response.error("Terjadi kesalahan saat mengupdate data", res);
    } else {
      response.oke("Data berhasil diupdate", result, res);
    }
  });
};

// delete data

exports.deleteData = function (req, res) {
  const id = req.body.id_mahasiswa;
  connection.query("DELETE FROM mahasiswa WHERE id_mahasiswa=?", [id], function (error, result) {
    if (error) {
      console.error("Error executing query: " + error);
      response.error("Terjadi kesalahan saat menghapus data", res);
    } else {
      response.oke("Data berhasil dihapus", result, res);
    }
  });
};

// tampilakan matakuliah group

exports.getMatakuliahGroup = function (req, res) {
  connection.query(
    "SELECT mahasiswa.id_mahasiswa,mahasiswa.nim,mahasiswa.nama,mahasiswa.jurusan,matakuliah.matakuliah,matakuliah.sks FROM krs JOIN matakuliah JOIN mahasiswa WHERE krs.id_matakuliah = matakuliah.id_matakuliah AND krs.id_mahasiswa = mahasiswa.id_mahasiswa ORDER BY mahasiswa.id_mahasiswa;",
    function (error, rows, fields) {
      if (error) {
        console.error("Error executing query: " + error);
        response.error("Terjadi kesalahan saat mengambil data", res);
      } else {
        response.okNested("Data berhasil ditampilkan", rows, res); // Mengganti response.okNested("Data berhasil ditampilkan", rows, res);
      }
    }
  );
};
