import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 w-full">
      <nav className="mb-4">
        <ul className="flex justify-center space-x-4">
          <li>
            <a href="/" className="hover:text-gray-400 transition duration-200">Home</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
