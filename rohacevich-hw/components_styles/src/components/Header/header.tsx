import './header.css'
function Header() {
    return (
        <header className='header'>
            <div className='header__logo'>MyApp</div>
            <nav className="header__navigation">
                <li>Main</li>
                <li>Description</li>
                <li>About</li>
                <li>Contact</li>
            </nav>
        </header>

    )
}

export default Header;