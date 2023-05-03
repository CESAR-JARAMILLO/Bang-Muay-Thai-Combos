import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import logo from './assets/images/stc-logo.png';
import { Box, Image, useBreakpointValue } from '@chakra-ui/react';
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

  const logoSize = useBreakpointValue({ base: '100%', md: '40%' });

  return (
    <Router>
      <Routes>
        <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <LoginPage setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/" element={!isAuthenticated ? <Navigate to="/login" /> : (
          <>
            <Box bg="blue.700">
              <Image bg="blue.700" paddingLeft="4" paddingRight="4" src={logo} mx="auto" display="block" boxSize={logoSize} />
            </Box>
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
