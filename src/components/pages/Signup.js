import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import Forms from '../Forms';

export default function SignUp() {
    return(
        <div className='sign-up-form'>
            < Forms/>
            < Footer/>
        </div>
    )
    ;   
}