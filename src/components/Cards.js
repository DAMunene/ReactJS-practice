import React, { useState, useEffect } from 'react';
import CardItem from './CardItem';
import './Card.css';
import { Button } from './Button';
import axios from 'axios'; 

function Cards({ articles }) {
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 
  
    useEffect(() => {
      if (articles.length > 0) {
        setLoading(false);
      } else {
        setLoading(true);
      }
    }, [articles]); // Trigger loading state based on the received articles
  
    if (loading) return <div>Loading articles...</div>;
    if (error) return <div>{error}</div>;
  
    return (
      <div className="cards">
          <div className="cards__container">
              <div className="cards__wrapper">
                  {articles.length > 0 ? (
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
          </div>
      </div>
    );
  }
  
  export default Cards;
  