
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {  Container } from '@mui/material';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home';
import ListSerie from './pages/ListSerie';
import Serie from './pages/Serie';
import AddSerie from './pages/AddSerie';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Container maxWidth="md">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/list" element={<ListSerie />} />
            <Route path='/addserie' element={<AddSerie />} />
            <Route path="/serie/:id" element={<Serie />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
