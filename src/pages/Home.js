import React from 'react';

import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Academics from '../components/Academics';
import Admissions from '../components/Admissions';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonial';
import ContactUs from '../components/ContactUs';



const Home = () => {
    
    return (
        <div>
          
           <Hero/>
           <AboutUs/>
           <Academics/>
           <Admissions/>
           <Gallery/>
           <Testimonials/>
           <ContactUs/>
        </div>
    );
};

export default Home;
