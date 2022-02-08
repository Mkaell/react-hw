import Navigation from './Navigation/Navigation';
import { FC } from 'react';

import './Header.css'



const Header: FC = () => {
    return (

        <header className="header">
            <Navigation />
        </header>

    )
}

export default Header;