import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const mailtoLink = `mailto:21it3038@rgipt.ac.in?subject=Contact Form ${name}&body=${message} (Email: ${email})`;
    window.location.href = mailtoLink;
  };

  return (
    <footer id="contact" className="p-6 mt-5 bg-slate-800 rounded-md">
      <div className="container mx-auto p-6">
        <h2 className="text-5xl italic text-fuchsia-200 font-bold mb-4 animate-bounce">Contact</h2>
        <form className="p-6 shadow-md rounded" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-200 font-semibold text-2xl">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-200 font-semibold text-2xl">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-200 font-semibold text-2xl">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
            ></textarea>
          </div>
          <button type="submit" className="bg-blue-950 text-blue-400 border border-blue-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
            <span className="bg-blue-400 shadow-blue-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            Send me
          </button>
        </form>
        <div className="mt-6 flex justify-center space-x-4">
          <a href="https://www.linkedin.com/in/krishna-kumar-rgipt/" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-blue-500">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://github.com/krishna7054" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-gray-600">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://www.instagram.com/krishna.k_4359/" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-pink-500">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
