import { NavLink } from 'react-router-dom';
import { FC } from 'react';

import './Navigation.css'

interface IActiveLink {
    isActive: string | boolean
}

const setActiveLink = ({ isActive }: IActiveLink): string => isActive ? 'active-link' : ''


const Navigation: FC = () => {

    const isLogin = false;

    return (

        <nav >
            <ul className="menu">
                {
                    isLogin ? (
                        <>
                            <NavLink to="/" className={setActiveLink}>Home</NavLink>
                            <NavLink to="/about" className={setActiveLink}>About</NavLink>
                            <NavLink to="/users" className={setActiveLink}>Users</NavLink>
                        </>

                    ) : (
                        <>
                            <NavLink to="/" className={setActiveLink}>Home</NavLink>
                            <NavLink to="/about" className={setActiveLink}>About</NavLink>
                        </>
                    )
                }

            </ul>
        </nav>

    )
}

export default Navigation;