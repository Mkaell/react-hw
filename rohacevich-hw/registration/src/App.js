import {Route, Routes, Navigate} from 'react-router-dom'

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<LoginPage/>}/>  
          <Route path="/register" element={<RegisterPage/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
