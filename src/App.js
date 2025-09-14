// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './home';
import ExpenseTracker from './expenseTracker';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ExpenseTracker" element={<ExpenseTracker />} />
        {/* Add more routes here for other pages */}
      </Routes>
    </Router>
  );
}

export default App;
