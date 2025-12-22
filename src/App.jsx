import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from './pages/About';
import Header from './components/Header';
import Courses from './pages/Courses';
import Footer from './components/CommonComponents/Footer';
import Services from './pages/Services';
import Contactus from "./pages/Contactus";
import ServicesDetailpage from './pages/ServicesDetailpage';
import Impulsehcm360 from './pages/Impulsehcm360';
import ImpulseDetailpage from './pages/ImpulseDetailpage';
import Explore from './pages/Explore';

const App = () => {
  return (
    <>
      <div
        className="fixed -left-10 top-50 w-[400px] blur-3xl h-[550px] rounded-full bg-gradient-to-r from-[#f0919190] to-transparent -z-10"
      ></div>
      <div className='fixed -right-20 -top-10 w-[300px] h-[400px] rounded-full bg-gradient-to-r from-[#f0919174] blur-3xl to-transparent -z-10'></div>
      <Router>
        <Header />
        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/impulsehcm360" element={<Impulsehcm360 />} />
            <Route path="/feature/:id" element={<ImpulseDetailpage />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/services" element={<Services />} />
            <Route path="/detail/:id" element={<ServicesDetailpage />} />
            <Route path="/contactus" element={<Contactus />} />
            <Route path="/explore" element={<Explore />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
};

export default App;