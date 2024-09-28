import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import router components
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Courses from './pages/Courses';
import TeachersTeam from './pages/TeachersTeam';
 
// import Header from './components/Header'; // Import the reusable Header component

function App() {
  return (
    <Router>
      <div className="App">
        {/* Add the Header outside Routes so it's displayed on all pages */}
        {/* <Header />  */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/teachersteam" element={<TeachersTeam />} />
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
