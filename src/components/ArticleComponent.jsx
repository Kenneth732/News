import React, { useState, useEffect } from 'react';

function ArticleComponent() {
  const [appleArticles, setAppleArticles] = useState([]);
  const [loading, setLoading] = useState(true);

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
    <div className="content_articles">
      {loading ? (
        <p>Loading...</p>
      ) : (
        appleArticles.map((article, index) => (
          <div className='article_card' key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            {/* Add more elements to display other article information if needed */}
          </div>
        ))
      )}
    </div>
  );
}

export default ArticleComponent;
