const express = require('express')
const router = express.Router()

router.use('/item', require('./itemController'))

module.exports = router