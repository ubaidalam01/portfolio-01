"use client"
import { useState } from "react";
import { headerItems } from '@/Constants/Constant'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {

  const [showPopup, setShowPopup] = useState(false);

  const handleTwitterClick = (e:any) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <section
      id={headerItems.contact.page}
      className="min-h-screen bg-[#25141f] flex flex-col justify-center items-center p-8 text-neutral-100"
    >
      <h2 className="text-4xl font-bold mb-6 text-center">Contact Me</h2>
      <p className="mb-8 text-center max-w-lg">
        If you’d like to get in touch, feel free to send me a message using the form below or reach
        out on social media!
      </p>
      <form className="w-full max-w-md bg-transparent p-6 rounded-lg shadow-2xl text-white">
        <div className="mb-4">
          <label htmlFor="name" className="block font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-teal-600"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-teal-600"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block font-semibold mb-2">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Your Message"
            rows={4}
            className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-teal-600"
          />
        </div>
        <button 
          type="submit"
          className="w-full bg-teal-600 text-white p-3 rounded hover:bg-teal-700 transition"
        >
          Send Message
        </button>
      </form>
      <div
        className="mt-8 flex space-x-10"  
        >
          <a href="" onClick={handleTwitterClick} className="text-2xl hover:text-teal-400">
    <FontAwesomeIcon icon={faTwitter} />
  </a>
  <a href="https://www.linkedin.com/in/ubaid-alam-a8b2242b5" className="text-2xl hover:text-teal-400">
    <FontAwesomeIcon icon={faLinkedin} />
  </a>
  <a href="https://github.com/ubaidalam01" className="text-2xl hover:text-teal-400">
    <FontAwesomeIcon icon={faGithub} />
  </a>
        </div>

     {showPopup && (
        <div className="fixed inset-0 bg-white bg-opacity-50 flex justify-center items-center">
          <div className="bg-[#25141f] p-6 rounded shadow-lg max-w-sm mx-auto text-center">
            <h2 className="text-xl font-semibold text-red-500">Twitter is Banned in Pakistan</h2>
            <p className="mt-2 text-red-500">Unfortunately, Twitter is banned in your region.</p>
            <button 
              onClick={handleClosePopup} 
              className="mt-4 px-4 py-2 bg-teal-400 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Contact
