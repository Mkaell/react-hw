import './main.css'
import React, { useState } from 'react'
function Main() {
    const [backgroundColor, setColor] = useState('#282c34')

    const handleClick = () => {
        setColor('#' + Math.floor(Math.random() * 16777215).toString(16));
    }

    return (
        <header
            className='main'
            style={{
                backgroundColor: backgroundColor
            }}>
            <h1 >My App</h1>
            <button onClick={handleClick} className='btn'>Change color</button>
        </header>
    )
}

export default Main;