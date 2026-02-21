import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderX from './components/HeaderX';
import Home from './pages/Home';
import Login from './pages/Login';
import Explorar from './pages/Explorar';
import './App.css';
import './index.css';
import Header from './components/HeaderX';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <HeaderX />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/explorar" element={<Explorar />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;