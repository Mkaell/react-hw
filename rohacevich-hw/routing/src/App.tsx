import React, { FC } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

import './App.css';

const App: FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <Header />
                <Main />
                <Footer />
            </header>
        </div >
    );
}

export default App;
