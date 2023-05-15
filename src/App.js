import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Accueil from './pages/Accueil';
import DescriptionLivres from './components/DescriptionLivres';
import Contact from './pages/Contact';
import './App.css'; // Importer le fichier CSS pour les styles personnalisés

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar">
          <h1 className="logo">Ma Bibliothèque</h1>
          <ul className="nav-links">
            <li className="nav-item">
              <Link to="/" className="nav-link">Accueil</Link>
            </li>
            <li className="nav-item">
              <Link to="/livres" className="nav-link">Livres</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/livres" element={<DescriptionLivres />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
