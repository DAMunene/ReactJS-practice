import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-container">
        <video src="/videos/video-1.mp4" autoPlay loop muted></video>
        <h1> Learn Django</h1>
        <p>A comprehensive guide to Django web development</p>
        <div className="hero-btns">
            <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--large'>Get Started</Button>
            <Button className="btns" buttonStyle='btn--primary' buttonSize='btn--large'>Read the Docs 
                <i className="fas fa-book-open"></i>
            </Button>
        </div>


    

    </div>
  )
}

export default HeroSection;
