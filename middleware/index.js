var express = require('express');
var auth = require('./auth')
var router = express.Router();

// DAFTARKAN MENU REGISTRASI
router.post('/api/v1/register', auth.register);

module.exports = router;