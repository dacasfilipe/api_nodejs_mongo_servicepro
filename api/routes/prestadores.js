// routes/prestadores.js

const express = require('express');
const router = express.Router();
const prestadoresController = require('../controllers/prestadoresController');

// Criar um prestador de serviços
router.post('/', prestadoresController.createPrestador);

// Listar todos os prestadores de serviços
router.get('/', prestadoresController.getPrestadores);

// Atualizar um prestador de serviços pelo ID
router.put('/:id', prestadoresController.updatePrestador);

// Excluir um prestador de serviços pelo ID
router.delete('/:id', prestadoresController.deletePrestador);

module.exports = router;

