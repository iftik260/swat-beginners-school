import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


const TopNav = () => {
  return (
    <div className="bg-[#212529] text-white text-sm py-2">
      <div className="max-w-screen-xl  mx-auto flex justify-between items-center px-4">
        {/* Contact Information */}
        <div>
          <p className="flex items-center">
            <span className="mr-2">📞</span>
            Call Us: 03415566504 - Email473@gmail.com
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#5f2ded] duration-500"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#5f2ded] duration-500"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#5f2ded] duration-500"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#5f2ded] duration-500"
          >
           <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
