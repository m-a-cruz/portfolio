import React from 'react';
import About from './About';
import Education from './Education';
import Contact from './Contact';
import Home from './Home';
import Header from './Header';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';



function App() {
  return (
    <>
    <Header/>
    <main>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Education" element={<Education />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
    </main>
    </>
  );
}

export default App;
