import React from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>
      <div className="linha">
      <Card title="Card 1" red>A</Card>
      <Card title="Card 2" green>B</Card>
      </div>
      <div className="linha">
        <Card title="Card 3" blue>C</Card>
        <Card title="Card 4" purple>D</Card>

      </div>
    </div>
  );
}

export default App;
