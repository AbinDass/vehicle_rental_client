import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <div className="mb-6 md:mb-0">
          <img src="your-logo-url.png" alt="Company Logo" className="h-12" />
        </div>
        
        {/* Social Media Links */}
        <div className="flex space-x-4 mb-6 md:mb-0">
          <a href="https://facebook.com" className="text-white hover:text-blue-500 transition-colors">
            <FaFacebook size="24" />
          </a>
          <a href="https://twitter.com" className="text-white hover:text-blue-400 transition-colors">
            <FaTwitter size="24" />
          </a>
          <a href="https://instagram.com" className="text-white hover:text-pink-500 transition-colors">
            <FaInstagram size="24" />
          </a>
          <a href="https://linkedin.com" className="text-white hover:text-blue-600 transition-colors">
            <FaLinkedin size="24" />
          </a>
        </div>

        {/* Company Address */}
        <div className="text-center md:text-left capitalize">
            <h1 className="mb-2 text-lg font-semibold">head office</h1>
          <p >NIT Calicut,Kerala,India </p>
          <p>Phone: +91 1234567890</p>
          <p>Email: used_car&bike@gmail.com</p>
          <p>office time: 09.00 am to 10.00 pm</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
