import React, { useState, useCallback, FC } from 'react';

import { Routes, Route } from "react-router-dom";
import Home from './Home/Home';
import About from './About/About';
import Users from './Users/Users';

const Main: FC = () => {
    const [counter, setCounter] = useState<number>(0);
    const [counterTwo, setCounterTwo] = useState<number>(0);

    const updateOne = () => {
        console.log(
            "Я не мемоизирован"
        );
    };

    const updateTwo = useCallback(() => {
        console.log(
            "Я мемоизирован!"
        );
    }, [counter]);

    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>One</button>
            <br />
            <button onClick={() => setCounterTwo(counterTwo + 1)}>
                Two
            </button>
            <Routes>
                <Route path="/" element={<Home updateOne={updateOne} updateTwo={updateTwo} />} />
                <Route path="/about" element={<About />} />
                <Route path="/users" element={<Users />} />
            </Routes>
        </div>
    );
};

export default Main;
