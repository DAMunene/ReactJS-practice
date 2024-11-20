import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline', 'btn--secondary']
const SIZES = ['btn--medium', 'btn--large']

export const Button = ({ 
    children,
    onClick,
    buttonStyle,
    buttonSize,
    type,
    className,
        }) => {
        const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
        const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
        return (
            <Link to="/sign-up" className={`btn-mobile ${className || ''}`}>
                <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${className || ''}`} onClick={onClick} type={type}>
                    {children}
                </button>
            </Link>
        )
    };