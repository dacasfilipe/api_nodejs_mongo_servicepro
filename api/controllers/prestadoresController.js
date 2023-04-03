
const Prestador = require('../models/Prestador');

// Criar um prestador de serviços
exports.createPrestador = async (req, res) => {
  const prestador = new Prestador(req.body);

  try {
    await prestador.save();
    res.status(201).json({ message: 'Prestador criado com sucesso', prestador });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar o prestador', error });
  }
};

// Listar todos os prestadores de serviços
exports.getPrestadores = async (req, res) => {
  try {
    const prestadores = await Prestador.find();
    res.status(200).json(prestadores);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar prestadores', error });
  }
};

// Atualizar um prestador de serviços pelo ID
exports.updatePrestador = async (req, res) => {
  const { id } = req.params;

  try {
    const prestador = await Prestador.findByIdAndUpdate(id, req.body, { new: true });
    
    if (!prestador) {
      return res.status(404).json({ message: 'Prestador não encontrado' });
    }

    res.status(200).json({ message: 'Prestador atualizado com sucesso', prestador });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar o prestador', error });
  }
};

// Excluir um prestador de serviços pelo ID
exports.deletePrestador = async (req, res) => {
  const { id } = req.params;

  try {
    const prestador = await Prestador.findByIdAndRemove(id);

    if (!prestador) {
      return res.status(404).json({ message: 'Prestador não encontrado' });
    }

    res.status(200).json({ message: 'Prestador excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao excluir o prestador', error });
  }
};
