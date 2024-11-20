import React from 'react'
import { Button } from './Button' 
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                Join the community to start your web development journey
            </p>
            <p className='footer-subscription-text'>
                You can subscribe to our newsletter to get updates on Django news, events, and resources.
            </p>
            <div className='input-areas'>
                <form>
                    <input type="email" name='email' placeholder="Enter your email address" className='footer-input'/>
                    <Button buttonStyle='btn--outline'>Subscribe</Button>
                </form>

            </div>
        </section>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>About Us</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Resources</Link>
                    <Link to='/'>Contact Us</Link>
                </div>
            </div>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>Social Media</h2>
                    <Link to='/'>Instagram</Link>
                    <Link to='/'>Facebook</Link>
                    <Link to='/'>Youtube</Link>
                    <Link to='/'>Twitter</Link>
                </div>
            </div>
        </div>
        <section className='social-media'>
            <div className='social-media-wrap'>
                <div className='footer-logo'>
                <Link to='/' className='social-logo'>   
                <i className="fas fa-book-open"/> Django Learn
                </Link>
                </div>
                <small className='website-rights'>Copyright © 2022 Django Unlocked. All rights reserved.</small>
                <div className='social-icons'>
                <Link to='/' target='_blank' aria-label='Facebook' className='social-icon-link facebook'>
                <i className="fab fa-facebook-f"/>
                </Link>
                <Link to='/' target='_blank' aria-label='Instagram' className='social-icon-link twitter'>
                <i className="fab fa-instagram"/>
                </Link>
                <Link to='/' target='_blank' aria-label='LinkedIn' className='social-icon-link linkedin'>
                <i className="fab fa-linkedin"/>
                </Link>
            </div>
            </div>
        </section>
    </div>
  );
}

export default Footer
