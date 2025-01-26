import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUsPage from './pages/AboutUsPage';
import Footer from './components/Footer';
import AcademicsPage from './pages/AcademicsPage';
import TopNav from './components/TopNav';


function App() {
    return (
        <Router>
            <TopNav/>
            <Navbar />
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us-page" element={<AboutUsPage />} />
                <Route path ="/academics-page" element={<AcademicsPage/>} />
            </Routes>
            <Footer/>
            
        </Router>
    );
}

export default App;
