# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

















import React, { useState, useEffect } from 'react';

function BusinessNewsComponent() {
  const [businessNews, setBusinessNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentP, setCurrentP] = useState(0);

  const handleSlideLefts = () => {
    if (currentP > 0) {
      setCurrentP(currentP - 5); // Adjust by 5 to show previous 5 articles
    }
  };

  const handleSlideRights = () => {
    if (currentP < businessNews.length - 5) {
      setCurrentP(currentP + 5); // Adjust by 5 to show next 5 articles
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=6cbdef411b3b47529a17b5cf4667303b');
        if (response.ok) {
          const data = await response.json();
          setBusinessNews(data.articles);
        } else {
          console.error('Error fetching business news:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Error fetching business news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className='news_header'>
        <h1>Business News</h1>
        <div className="news_icons">
          <i className="fas fa-chevron-circle-left" onClick={handleSlideLefts}></i>
          <i className="fas fa-chevron-circle-right" onClick={handleSlideRights}></i>
        </div>
      </div>
      <div className="content_news">
        {loading ? (
          <p>Loading...</p>
        ) : (
          businessNews
            .slice(currentP, currentP + 5) // Display the next 5 articles based on currentP
            .map((article, index) => (
              <div className='news_card' key={article.id}>
                <img
                  className=''
                  src={article.urlToImage || 'placeholder.jpg'}
                  alt="News"
                />
                <div className='news_infor'>{article.title}</div>
                {/* Add more elements to display other article information if needed */}
              </div>
            ))
        )}
      </div>
    </>
  );
}

export default BusinessNewsComponent;
