const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const port = process.env.PORT;

// Conexão com o MongoDB
mongoose.connect('mongodb://localhost:27017/prestadoresDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conexão com o MongoDB estabelecida'))
  .catch((error) => console.error('Erro ao conectar com o MongoDB:', error));

// Configurar o body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(express.json());

// Rotas
const prestadoresRouter = require('./routes/prestadores');
app.use('/api/prestadores', prestadoresRouter);

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});