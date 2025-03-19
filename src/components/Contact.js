import React from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Contact() {
    return (
        <section className="bg-black text-white py-16">
          <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
            
            {/* Section Heading */}
            <h2 className="text-4xl font-extrabold text-yellow-500 text-center mb-8"> Contact Us</h2>
    
            {/* Contact Details */}
            <div className="grid md:grid-cols-2 gap-12">
              
              {/* Contact Info */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <FaPhoneAlt className="text-yellow-500 text-3xl" />
                  <p className="text-lg">+234 123 456 7890</p>
                </div>
                <div className="flex items-center space-x-4">
                  <FaEnvelope className="text-yellow-500 text-3xl" />
                  <p className="text-lg">info@rapbattle.com</p>
                </div>
                <div className="flex items-center space-x-4">
                  <FaMapMarkerAlt className="text-yellow-500 text-3xl" />
                  <p className="text-lg">Lagos, Nigeria</p>
                </div>
    
                {/* Social Media */}
                <div className="flex space-x-6 mt-6">
                  <a href="https/local.cm" className="text-yellow-500 text-3xl hover:text-yellow-400 transition">
                    <FaFacebook />
                  </a>
                  <a href="https/local.cm" className="text-yellow-500 text-3xl hover:text-yellow-400 transition">
                    <FaTwitter />
                  </a>
                  <a href="https/local.cm" className="text-yellow-500 text-3xl hover:text-yellow-400 transition">
                    <FaInstagram />
                  </a>
                </div>
              </div>
    
              {/* Contact Form */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">Send Us a Message</h3>
                <form className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full p-3 rounded bg-gray-900 text-white focus:outline-none"
                  />
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full p-3 rounded bg-gray-900 text-white focus:outline-none"
                  />
                  <textarea 
                    rows="10" 
                    placeholder="Your Message" 
                    className="w-full p-3 rounded bg-gray-900 text-white focus:outline-none"
                  ></textarea>
                  <button 
                    type="submit" 
                    className="w-full bg-yellow-500 text-black py-3 font-bold rounded hover:bg-yellow-400 transition">
                    Send Message
                  </button>
                </form>
              </div>
    
            </div>
          </div>
        </section>
      );
}

export default Contact