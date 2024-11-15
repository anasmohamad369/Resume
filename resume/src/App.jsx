import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Display } from './Display';
import './App.css';

const App = () => {
  return (
    <div id="tags">
      <Router>
        <Routes>
          <Route path="/*" element={<Display />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
