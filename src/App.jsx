import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login';

export default function App() {
  return (
    <Router>
      <div>
        {/* Use o componente Routes para envolver suas rotas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  )
}