import React, { useState } from "react";

import './counter.css'

const Counter: React.FC = () => {
    const [count, setCount] = useState(0);

    const increaseCount = (): void => {
        setCount(count + 1);
    };

    const resetCount = (): void => {
        setCount(0);
    };

    const decreaseCount = (): void => {
        setCount(count - 1);
    };

    const randomCount = (): void => {
        setCount(Math.floor(Math.random() * 51));
    };

    return (
        <div className='counter'>
            <p className="counter__num">{count}</p>
            <div className='flex'>
                <button onClick={increaseCount} className='btn counter__btn-plus'>
                    <i className="fas fa-plus"></i>
                </button>
                <button onClick={resetCount} className='btn counter__btn-refresh'>
                    <i className="fas fa-sync-alt"></i>
                </button>
                <button onClick={decreaseCount} className='btn counter__btn-minus'>
                    <i className="fas fa-minus"></i>
                </button>
                <button onClick={randomCount} className='btn counter__btn-random'>
                    <i className="fas fa-dice"></i>
                </button>
            </div>
        </div>
    )
}

export default Counter;