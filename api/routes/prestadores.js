// routes/prestadores.js

const express = require('express');
const router = express.Router();
const prestadoresController = require('../controllers/prestadoresController');

router.post('/', prestadoresController.createPrestador);
router.get('/', prestadoresController.getPrestadores); // Adicione esta linha

module.exports = router;

