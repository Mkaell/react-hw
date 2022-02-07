import React, { FC, useState } from 'react'

import './main.css'

const Main: FC = () => {

    const [backgroundColor, setColor] = useState<string>('#282c34')

    const handleClick = (): void => {
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