import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';

export default function Articles() {
    const [searchTerm, setSearchTerm] = useState('');
    const [articles, setArticles] = useState([]);
    const [suggestions, setSuggestions] = useState([]);

    // Fetch all articles or filter by search query
    const fetchArticles = async (query = '') => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/articles/?search=${query}`);
            setArticles(response.data); // Full article list
        } catch (error) {
            console.error('Error fetching articles:', error);
        }
    };

    // Fetch autocomplete suggestions
    const fetchSuggestions = async (query = '') => {
        if (!query) {
            setSuggestions([]);
            return;
        }
        try {
            const response = await axios.get(`http://127.0.0.1:8000/articles/?search=${query}`);
            const titlesAndAuthors = response.data.map(article => article.title || article.author);
            setSuggestions(titlesAndAuthors.slice(0, 5)); // Limit suggestions
        } catch (error) {
            console.error('Error fetching suggestions:', error);
        }
    };

    useEffect(() => {
        fetchArticles(); // Initial load
    }, []);

    const handleSearchChange = (event) => {
        const query = event.target.value;
        setSearchTerm(query);
        fetchSuggestions(query); // Update autocomplete
        fetchArticles(query); // Update articles
    };

    const handleSuggestionClick = (suggestion) => {
        setSearchTerm(suggestion);
        fetchArticles(suggestion);
        setSuggestions([]); // Clear suggestions after selection
    };

    return (
        <div className="articles-page">
            <div className="content-container">
            <h1 className='articles'>Check Out Our Articles!</h1>

                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search articles"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    {suggestions.length > 0 && (
                        <ul className="autocomplete-dropdown">
                            {suggestions.map((suggestion, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleSuggestionClick(suggestion)}
                                >
                                    {suggestion}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <Cards articles={articles} />
            </div>
            <Footer />
        </div>
    );
}
