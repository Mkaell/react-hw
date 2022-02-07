import { NavLink } from 'react-router-dom';
import { FC } from 'react';

import './Navigation.css'

interface IActiveLink {
    isActive: string | boolean
}

const setActiveLink = ({ isActive }: IActiveLink): string => isActive ? 'active-link' : ''


const Navigation: FC = () => {
    return (

        <nav >
            <ul className="menu">
                <NavLink to="/" className={setActiveLink}>Home</NavLink>
                <NavLink to="/about" className={setActiveLink}>About</NavLink>
                <NavLink to="/users" className={setActiveLink}>Users</NavLink>
            </ul>
        </nav>

    )
}

export default Navigation;