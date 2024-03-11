import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Accounting from './components/accounting';
import Footer from './components/footer';

function App() {
  const [employees, setEmployees] = useState([]);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/accounting" element={<Accounting />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
