import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Plans from './components/Plans';
import Nutrition from './components/Nutrition';
import Challenges from './components/Challenges';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/plans">Pre-designed Plans</Link></li>
            <li><Link to="/nutrition">Nutrition Tracking</Link></li>
            <li><Link to="/challenges">Challenges</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer>
        <p>&copy; 2023 Fitness Tracking Project. All rights reserved.</p>
      </footer>
    </Router>
  );
}

export default App;
