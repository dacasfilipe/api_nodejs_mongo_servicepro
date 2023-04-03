import React, { useState, useEffect } from 'react';
import axios from 'axios';
const API_BASE_URL = 'http://localhost:3000';

const PrestadorList = () => {
  const [prestadores, setPrestadores] = useState([]);

  useEffect(() => {
    fetchPrestadores();
  }, []);

  const fetchPrestadores = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/prestadores`);
      setPrestadores(response.data);
    } catch (err) {
      console.error('Erro ao buscar prestadores', err);
    }
  };

  return (
    <div>
      <h2>Lista de Prestadores</h2>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Email</th>
<th>Categoria</th>
</tr>
</thead>
<tbody>
{prestadores.map((prestador) => (
<tr key={prestador._id}>
<td>{prestador.nome}</td>
<td>{prestador.telefone}</td>
<td>{prestador.email}</td>
<td>{prestador.categoria}</td>
</tr>
))}
</tbody>
</table>
</div>
);
};

export default PrestadorList;
