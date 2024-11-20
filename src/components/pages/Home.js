import React, { useState, useEffect } from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';
import axios from 'axios';

function Home() {
    const [articles, setArticles] = useState([]); // To store the first 3 articles

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                // Fetch the first 3 articles from the API
                const response = await axios.get('http://127.0.0.1:8000/articles/?limit=3');
                setArticles(response.data); // Store them in state
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        };

        fetchArticles(); // Call fetch when component mounts
    }, []);

    return (
        <>
            <HeroSection />
            {/* Pass the first 3 articles to the Cards component */}
            <Cards articles={articles} />
            <Footer />
        </>
    );
}

export default Home;