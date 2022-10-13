import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Results from './components/Results'

function App() {
  return (
    <Router>
      <Header />
      <div className="background" >
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/results" element={<Results/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
