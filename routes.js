"use strict";

module.exports = function (app) {
  const jsonku = require("./controller");

  app.route("/").get(jsonku.index);

  app.route("/tampil").get(jsonku.getAllData);

  // Menampilkan data berdasarkan ID
  app.route("/tampil/:id").get(jsonku.getDataById);

  // tambah data 
  app.route("/tambah").post(jsonku.addData);
  
  // update data 
  app.route("/update").put(jsonku.updateData);

  // deleteData 
  app.route("/delete").delete(jsonku.deleteData);

  // tampil data matakuliah group
  app.route("/tampilmatakuliah").get(jsonku.getMatakuliahGroup);

}