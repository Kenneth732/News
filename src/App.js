import logo from './logo.svg';
import './App.css';
import NewsAggregator from './components/NewsAggregator';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <NewsAggregator /> 
    </div>
  );
}

export default App;
