'use strict'

const response = require('./res')
const connection = require('./koneksi')


exports.index = function (req,res) {
    response.oke("aplikasi REST API ku berjalan",res)
}