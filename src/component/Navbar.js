// Navbar.jsx

import React from 'react';

import { FaTelegram } from 'react-icons/fa';
import { MdOutlineSearch } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-1">
      <div className="w-[100vw] mx-auto px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4 ">
          <div className="p-4 flex items-center">
        <FaTelegram className="mr-2" size={24} />
        <span className="text-xl font-semibold">Telegram</span>
      </div>
          </div>
          <div className="">
            <h2 className='text-white font-bold text-3xl '>Telegram</h2>
          </div>
          <div className="flex space-x-4">
            <button className="bg-white text-blue-500 px-4 py-2 rounded-lg shadow-md hover:bg-gray-200"><MdOutlineSearch/></button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
