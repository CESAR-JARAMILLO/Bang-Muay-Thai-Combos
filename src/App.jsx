import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import './App.css';
import Hero from './components/Hero';
import QuickLinks from './components/QuickLinks';
import CardSection from './components/CardSection';
import LoginPage from './components/LoginPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (isAuthenticated) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <LoginPage setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/" element={!isAuthenticated ? <Navigate to="/login" /> : (
          <>
            <Hero />
            <QuickLinks />
            <CardSection />
          </>
        )} />
      </Routes>
    </Router>
  );
}

export default App;
