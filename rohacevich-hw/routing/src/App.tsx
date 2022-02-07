import React, { FC } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import About from './components/Main/About/About';
import Home from './components/Main/Home/Home';
import Users from './components/Main/Users/Users';
import { Routes, Route } from "react-router-dom";

import './App.css';



const App: FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/users" element={<Users />} />
                </Routes>
                <Footer />
            </header>
        </div >
    );

}

export default App;
