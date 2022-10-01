import './App.css';
import background from './img/background.png'
import Header from './components/Header'
import Home from './components/Home'

function App() {
  return (
    <div>
      <Header />
      <div style={{ backgroundImage: `url(${background})`}}>
      <Home />
      </div>
    </div>
  );
}

export default App;
