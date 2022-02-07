import './footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className='footer__item'>
                <h2 className='footer__title'>About Us</h2>
                <a className='footer__link' href="/">Aim</a>
                <a className='footer__link' href="/">Vision</a>
                <a className='footer__link' href="/">Testimonials</a>
            </div>
            <div className='footer__item'>
                <h2 className='footer__title'>Services</h2>
                <a className='footer__link' href='/'>Writing</a>
                <a className='footer__link' href="/">Internships</a>
                <a className='footer__link' href="/">Coding</a>
                <a className='footer__link' href="/">Teaching</a>
            </div>
            <div className='footer__item'>
                <h2 className='footer__title'>Contact Us</h2>
                <a className='footer__link' href="/">Uttar Pradesh</a>
                <a className='footer__link' href="/">Ahemdabad</a>
                <a className='footer__link' href="/">Indore</a>
                <a className='footer__link' href="/">Mumbai</a>
            </div>
        </div>
    )
}

export default Footer;