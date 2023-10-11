import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from "react";
import Home from './pages/Home';
import Login from './pages/Login';
function App() {
  return (
  <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </Router>
  </div>
  );
}

export default App;
