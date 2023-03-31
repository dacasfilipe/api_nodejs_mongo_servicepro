// components/PrestadorForm.jsx

import React, { useState } from 'react';
import axios from 'axios';

const PrestadorForm = () => {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [categoria, setCategoria] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const novoPrestador = {
      nome,
      telefone,
      email,
      categoria,
    };

    try {
      await axios.post('/api/prestadores', novoPrestador);
      setNome('');
      setTelefone('');
      setEmail('');
      setCategoria('');
      alert('Prestador cadastrado com sucesso!');
    } catch (err) {
      alert('Erro ao cadastrar o prestador');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cadastrar Prestador</h2>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Telefone"
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Categoria"
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
        required
      />
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default PrestadorForm;
