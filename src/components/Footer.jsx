import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black-100 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About Me */}
        <div>
          <h3 className="text-xl font-semibold mb-4">About me</h3>
          <p className="text-white-100 text-sm leading-relaxed">
            I craft bold, responsive websites that blend creativity with performance — helping brands stand out online.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="text-white-100 text-sm space-y-2">
            <li><a href="#hero" className="hover:text-white">Home</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#work" className="hover:text-white">Work</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
            <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          <p className="text-white-100 text-sm">+91 8699835513</p>
          <a
            href="mailto:tushardhawan1607@gmail.com"
            className="text-sky-400 hover:underline text-sm block mb-4"
          >
            ai77nexus@gmail.com
          </a>
          <div className="flex gap-4 text-white">
            <a
              href="https://www.linkedin.com/in/nitish-sharma01"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/nitish0009"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.instagram.com/nitish_sharma17"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-white-100 mt-10">
        © 2025 Nitish Sharma. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
