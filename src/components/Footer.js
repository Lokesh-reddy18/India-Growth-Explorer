import React from "react";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => (
  <footer className="footer-container">
    <div className="footer-content">
      <div className="footer-main-left">
        <span>© {new Date().getFullYear()} India Growth Explorer</span>
        <span className="footer-tagline">Decoding India's Development</span>
      </div>
      <div className="footer-signature-center"><i>Made With <span role="img" aria-label="love">❤️</span> by Lokesh Reddy</i></div>
      <div className="footer-icons-right">
        <a
          href="https://github.com/Lokesh-reddy18"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon-link"
          aria-label="GitHub"
        >
          <FaGithub size={22} color="#181717" />
        </a>
        <a
          href="mailto:kollilokeshreddy18@gmail.com"
          className="footer-icon-link"
          aria-label="Email"
        >
          <FaEnvelope size={22} color="#D14836" />
        </a>
        <a
          href="https://www.linkedin.com/in/kolli-lokesh-reddy/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon-link"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={22} color="#0077B5" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer; 