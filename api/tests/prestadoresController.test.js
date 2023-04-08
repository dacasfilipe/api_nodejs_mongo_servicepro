const mongoose = require('mongoose');
const { createPrestador, getPrestadores } = require('../controllers/prestadoresController');
const Prestador = require('../models/Prestador');

// Conectar ao banco de dados de teste
beforeAll(async () => {
  await mongoose.connect('mongodb://localhost:27017/testDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
});

// Desconectar do banco de dados após a conclusão dos testes
afterAll(async () => {
  await mongoose.connection.close();
});

describe('Prestadores Controller', () => {
  // Limpar a coleção de prestadores antes de cada teste
  beforeEach(async () => {
    await Prestador.deleteMany();
  });

  test('Deve criar um prestador', async () => {
    const req = {
      body: {
        nome: 'Fulano',
        telefone: '123456789',
        email: 'fulano@example.com',
        categoria: 'Eletricista',
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await createPrestador(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalled();

    const prestador = await Prestador.findOne({ email: 'fulano@example.com' });
    expect(prestador).toBeTruthy();
  });

  test('Deve listar prestadores', async () => {
    const prestador1 = new Prestador({
      nome: 'Fulano',
      telefone: '123456789',
      email: 'fulano@example.com',
      categoria: 'Eletricista',
    });
    const prestador2 = new Prestador({
      nome: 'Beltrano',
      telefone: '987654321',
      email: 'beltrano@example.com',
      categoria: 'Encanador',
    });

    await prestador1.save();
    await prestador2.save();

    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await getPrestadores(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalled();

    const prestadores = await Prestador.find();
    expect(prestadores.length).toBe(2);
  });
});
