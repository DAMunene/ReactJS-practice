import React, { useState, useEffect } from 'react';
import CardItem from './CardItem';
import './Card.css';
import { Button } from './Button';
import axios from 'axios'; 

function Cards() {
  const [articles, setArticles] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/articles/'); 
        setArticles(response.data); 
        setLoading(false);
      } catch (err) {
        console.error('Error fetching articles:', err);
        setError('Failed to fetch articles. Please try again later.');
        setLoading(false);
      }
    };

    fetchArticles();
  }, []); 

  if (loading) return <div>Loading articles...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="cards">
        <h1>Check Out Our Articles!</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                {error ? (
                    <div className="error">Failed to fetch articles. Please try again later.</div>
                ) : articles.length > 0 ? (
                    <ul className="cards__item">
                        {articles.map((article, index) => (
                            <CardItem
                                key={index}
                                src={article.image || '/images/default.jpeg'}
                                text={article.title}
                                label={article.category || 'Uncategorized'}
                                path={`/blog/article-${article.id}`}
                            />
                        ))}
                    </ul>
                ) : (
                    <div className="no-articles">No articles found.</div>
                )}
            </div>
            <Button buttonStyle="btn--outline" className="explore-more-btn">
                Explore more articles <i className="fas fa-arrow-right" />
            </Button>
        </div>
    </div>
);

  
}

export default Cards;
