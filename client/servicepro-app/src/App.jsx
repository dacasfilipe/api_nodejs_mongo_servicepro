import React from 'react';
import PrestadorForm from './components/PrestadorForm';
import PrestadorList from './components/PrestadorList';
import './index.css';

function App() {
  return (
    <div className="App">
      <PrestadorForm />
      <PrestadorList />
    </div>
  );
}

export default App;

