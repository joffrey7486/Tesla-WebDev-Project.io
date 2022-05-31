import React, { useState} from 'react';
import Header from './components/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import './assets/styles/App.scss';
import Menu from './components/Menu';
import HeaderBlock from './components/HeaderBlock';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  return (
    <Router>
      <div className="app">
        <h1>Hello Elon</h1>
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        {isMenuOpen && <Menu />}
        <HeaderBlock /> 
      </div>
    </Router>
  );
}

export default App;
