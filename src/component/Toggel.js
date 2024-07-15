// ToggleSection.jsx

import React, { useState } from 'react';
import { CgMenuLeft } from "react-icons/cg"
import { IoClose } from "react-icons/io5";

const Toggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="max-w-md mx-auto">
      <button
        onClick={toggleSection}
        className="bg-blue-500 text-white py-2 px-4 rounded-lg mb-2 hover:bg-blue-600 transition duration-300"
      >
        {isOpen ? <IoClose/> : <CgMenuLeft/>}
      </button>
      
        <div className={`bg-gray-600 rounded-lg p-4 mt-2 absolute ${isOpen ? "left-0":"-left-[100%]"} h-[60vh] w-full  bottom-3 z-0 shadow-md transition duration-00`}>
        <div className=" bg-white h-full rounded-lg shadow-md">
      <div className=" ">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover mx-auto"
        />
        <p className='text-black text-center'>Add profile</p>
        
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Contact Information</h3>
        <ul className="list-none list-inside text-gray-700 px-3">
          <li className='my-3 text-2xl font-bold cursor-pointer '> Johndoe</li>
          <li className='my-3 text-2xl font-bold cursor-pointer '> Contact Me</li>
          <li className='my-3 text-2xl font-bold cursor-pointer '> Setting</li>
        
          
        </ul>
      </div>
    </div>
        </div>
      
    </div>
  );
};

export default Toggle;
