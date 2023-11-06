import React, { useState, useEffect } from 'react';

function ArticleComponent() {
  const [appleArticles, setAppleArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentP, setCurrentP] = useState(0); // Initialize currentP to 0

  const handleSlideLefts = () => {
    if (currentP > 0) {
      setCurrentP(currentP - 1);
    }
  };

  const handleSlideRights = () => {
    if (currentP < appleArticles.length - 5) {
      setCurrentP(currentP + 1);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/everything?q=apple&from=2023-11-05&to=2023-11-05&sortBy=popularity&apiKey=6cbdef411b3b47529a17b5cf4667303b');
        if (response.ok) {
          const data = await response.json();
          setAppleArticles(data.articles);
        } else {
          console.error('Error fetching articles:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className='news_header'>
        <h1>Apple</h1>
        <div className="news_icons">
          <i className="fas fa-chevron-circle-left" onClick={handleSlideLefts}></i>
          <i className="fas fa-chevron-circle-right" onClick={handleSlideRights}></i>
        </div>
      </div>
      <div className="content_news">
        {loading ? (
          <p>Loading...</p>
        ) : (
          appleArticles
            .slice(currentP, currentP + 5) // Display only 5 articles based on currentP
            .map((article, index) => (
              <div className='news_card' key={article.id}>
                <img
                  className=''
                  src={article.urlToImage || 'placeholder.jpg'}
                  alt="News"
                />
                <div className='news_infor'>{article.title}</div>
                {/* <p>{article.description}</p> */}
                {/* Add more elements to display other article information if needed */}
              </div>
            ))
        )}
      </div>
    </>
  );
}

export default ArticleComponent;
