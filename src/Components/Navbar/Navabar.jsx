import React from "react";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Left Section - Logo */}
        <NavLink
          to="/"
          className="flex items-center space-x-2 text-2xl font-bold text-blue-500 hover:text-blue-800"
        >
          <img src="/icon.png" alt="EveM Logo" className="h-8 w-8" />
          <span>EveM</span>
        </NavLink>

        {/* Center Section - Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-gray-700">
          <li>
            <NavLink to='/' className="hover:text-blue-500">
              Home
            </NavLink>
          </li>
          <li>
            <a href="/about" className="hover:text-blue-500">
              About
            </a>
          </li>
          <li>
            <a href="createevent" className="hover:text-blue-500">
              Create Event
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-blue-500">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500">
              Our Programs
            </a>
          </li>
        </ul>

        {/* Right Section - Search Bar & Buttons */}
        <div className="flex items-center space-x-4">
          {/* Search Input */}
          <div className="relative hidden md:flex">
            <input
              type="text"
              placeholder="Search events"
              className="border-2 border-blue-500 rounded-full pl-10 pr-4 py-2 text-gray-700 w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-500" />
          </div>

          {/* Location */}
          <div className="hidden md:flex items-center text-gray-700">
            <FaMapMarkerAlt className="mr-1 text-gray-500" />
            <span>Dhaka</span>
          </div>

          {/* Login & Sign-Up Buttons */}
          <a
            href="#"
            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
          >
            Log In/Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
