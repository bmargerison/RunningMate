import './App.css';
import background from './img/background.png'
import Header from './components/Header'
import Home from './components/Home'

function App() {
  return (
    <div>
      <Header />
        <div style={{ backgroundImage: `url(${background})`, opacity:0.3 }} >
      <Home />
      </div>
    </div>
  );
}

export default App;
