const express = require('express');
const { getAccidents } = require('../controllers/accidentsController');

const router = express.Router();
router.get('/', getAccidents);

module.exports = router;
