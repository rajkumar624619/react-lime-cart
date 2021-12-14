import React from 'react';
import './App.css';
import Navbar from './component';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './pages';
import Register from './pages/register';
import Search from './pages/search';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/search' element={<Search/>} />
        </Routes>
    </Router>
  );
}
  
export default App;