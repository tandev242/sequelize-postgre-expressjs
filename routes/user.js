const express = require('express')
const router = express.Router()
const { create } = require('../controllers/user')

module.exports = app => {
    router.post('/create', create)
    app.use('/api/user', router);
}
