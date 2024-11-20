import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 768){
      setButton(false);
    }
    else{
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                <i className="fas fa-book-open"/> Django Learn
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                  <i className={click ? "fas fa-times" : "fas fa-bars"} ></i>
                </div>
                <ul className={click ? 'nav-menu active': 'nav-menu'}>
                  <li className='nav-item'>
                    <Link to="/" className='nav-link' onClick={closeMobileMenu}>Home</Link>
                    </li>
                    {/* <li className='nav-item'>
                    <Link to="/services" className='nav-link' onClick={closeMobileMenu}>Services</Link>
                    </li> */}
                    <li className='nav-item'>
                    <Link to="/articles" className='nav-link' onClick={closeMobileMenu}>Articles</Link>
                    </li>
                    <li className='nav-item'>
                    <Link to="/sign-up" className='nav-link-mobile' onClick={closeMobileMenu}>Sign Up</Link>
                    </li>
                </ul>
                {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
            </div>
        </nav>
    </>
  )
}

export default Navbar
