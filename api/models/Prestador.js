// models/Prestador.js

const mongoose = require('mongoose');

const prestadorSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  telefone: { type: String, required: true },
  email: { type: String, required: true },
  categoria: { type: String, required: true },
});

module.exports = mongoose.model('Prestador', prestadorSchema);
