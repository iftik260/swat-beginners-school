import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-[#0c0e2b] text-white py-16 px-4">
      <div className="container  mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* About Us Section */}
        <div className="footer-about">
          <h3 className="text-xl font-semibold text-white mb-4">About Us</h3>
          <p className="text-base text-[#9fa2ce]">
            Welcome to Swat Beginners School! We are committed to providing quality education
            and nurturing young minds to become the leaders of tomorrow.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-links">
          <h3 className="text-xl font-semibold text-white mb-6">Quick Links</h3>
          <ul className="text-[16px] font-semibold text-[#9fa2ce]">
            <li><a href="#about-us" className="t hover:text-white">About Us</a></li>
            <li><a href="#admissions" className=" hover:text-white">Admissio-ns</a></li>
            <li><a href="#academics" className=" hover:text-white">Our Academics</a></li>
            <li><a href="#contact-us" className=" hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="footer-contact">
          <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
          <p className="text-base text-[#9fa2ce]"><FontAwesomeIcon icon="map-marker-alt" /> 123 School Lane, Education Sakhra, Pakistan</p>
          <p className="text-base text-[#9fa2ce]"><FontAwesomeIcon icon="phone" />03432969209</p>
          <p className="text-base text-[#9fa2ce]"><FontAwesomeIcon icon="envelope" /> <a href="mailto:info@yourschool.com" className=" hover:text-white">info@yourschool.com</a></p>
        </div>

        {/* Social Media Section */}
        <div className="footer-social">
          <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-white text-blue-900 rounded-full hover:bg-yellow-400 hover:text-white">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-white text-blue-900 rounded-full hover:bg-yellow-400 hover:text-white">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-white text-blue-900 rounded-full hover:bg-yellow-400 hover:text-white">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-white text-blue-900 rounded-full hover:bg-yellow-400 hover:text-white">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom mt-8 text-center text-sm text-gray-400 border-t border-gray-600 pt-4">
        <p>&copy; 2025 Swat Beginners School. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
