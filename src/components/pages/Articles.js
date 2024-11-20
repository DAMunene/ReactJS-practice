import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';

export default function Articles() {
    return(
        <div className='articles-page'>
            <h1 className='articles'>Articles</h1>
            <Cards/>
            <Footer/>
        </div>
    ) 
    ;

}