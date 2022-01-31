import React from 'react';
import './App.css';
import Counter from './components/Counter/counter';

function App() {
  return (
    <div className="App">
      <div className="App__container">
        <Counter />
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </div>
    </div>
  );
}

export default App;
