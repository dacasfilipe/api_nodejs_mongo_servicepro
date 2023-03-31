// routes/prestadores.js

const express = require('express');
const router = express.Router();
const Prestador = require('../models/Prestador');

// Obter todos os prestadores
router.get('/', async (req, res) => {
  try {
    const prestadores = await Prestador.find();
    res.json(prestadores);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Cadastrar um prestador
router.post('/', async (req, res) => {
  const prestador = new Prestador({
    nome: req.body.nome,
    telefone: req.body.telefone,
    email: req.body.email,
    categoria: req.body.categoria,
  });

  try {
    const novoPrestador = await prestador.save();
    res.status(201).json(novoPrestador);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Atualizar um prestador
router.put('/:id', async (req, res) => {
    try {
      const prestador = await Prestador.findById(req.params.id);
      if (!prestador) return res.status(404).json({ message: 'Prestador não encontrado' });
  
      prestador.nome = req.body.nome || prestador.nome;
      prestador.telefone = req.body.telefone || prestador.telefone;
      prestador.email = req.body.email || prestador.email;
      prestador.categoria = req.body.categoria || prestador.categoria;
  
      const prestadorAtualizado = await prestador.save();
      res.json(prestadorAtualizado);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  // Excluir um prestador
  router.delete('/:id', async (req, res) => {
    try {
      const prestador = await Prestador.findById(req.params.id);
      if (!prestador) return res.status(404).json({ message: 'Prestador não encontrado' });
  
      await prestador.remove();
      res.json({ message: 'Prestador excluído com sucesso' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  

module.exports = router;

