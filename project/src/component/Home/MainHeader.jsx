import React, { useState } from 'react';
import { FaMapMarkerAlt, FaSearch, FaBars, FaChevronDown } from 'react-icons/fa';
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const MainHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    services: false,
    about: false,
    blog: false
  });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = (dropdown) => {
    setDropdownOpen(prev => ({
      ...prev,
      [dropdown]: !prev[dropdown]
    }));
  };

  return (
    <>
      {/* Top Navigation */}
      <div className="bg-gray-200 py-2">
        <ul className="flex flex-nowrap justify-center gap-4 text-center list-none px-3 m-0">
          <li className="text-gray-500 text-xs sm:text-sm cursor-pointer whitespace-nowrap hover:text-gray-700 transition"
            onClick={() => window.location.href = "#"}>
            Account
          </li>
          <li className="text-gray-500 text-xs sm:text-sm cursor-pointer whitespace-nowrap hover:text-gray-700 transition"
            onClick={() => window.location.href = "#"}>
            Login
          </li>
          <li className="text-gray-500 text-xs sm:text-sm cursor-pointer whitespace-nowrap hover:text-gray-700 transition"
            onClick={() => window.location.href = "#"}>
            Register
          </li>
          <li className="text-gray-500 text-xs sm:text-sm cursor-pointer whitespace-nowrap hover:text-gray-700 transition"
            onClick={() => window.location.href = "#"}>
            Appointment
          </li>
          <li className="text-gray-500 text-xs sm:text-sm cursor-pointer whitespace-nowrap hover:text-gray-700 transition"
            onClick={() => window.location.href = "#"}>
            Contact
          </li>
        </ul>
      </div>

      {/* Logo + Info Section */}
      <div className="py-[35px] px-4 md:px-[80px] mt-2 md:mt-0">
        <div className="flex flex-wrap items-center justify-between">
          
          {/* Logo */}
          <div className="w-full md:w-1/4 mb-2 md:mb-0 flex justify-start">
            <img
              src="src/assets/image/csb_logo.jpg"
              alt="CSB Logo"
              className="w-[200px] h-[50px] md:w-[256px] md:h-[60px] object-contain cursor-pointer"
              onClick={() => window.location.href = '/'}
            />
          </div>

          {/* Search Box - Mobile view */}
          <div className="w-full mb-2 md:hidden relative">
            <input
              type="search"
              placeholder="Search..."
              className="w-full border-b border-[#ccc] py-[5px] px-[10px] pr-[30px] outline-none focus:border-[#e95f5f]"
            />
            <div className="absolute right-[10px] top-[8px] text-[#504c4c] text-[16px]"><FaSearch /></div>
          </div>

          {/* Contact Info 1 */}
          <div className="hidden md:flex items-center gap-[10px] md:w-1/4">
            <div className="text-[#e95f5f] text-[20px] mt-2"><FaPhoneAlt /></div>
            <div>
              <p className="text-[#555] text-[14px] ml-[5px]">Customer Support & Sales</p>
              <h6 className="text-[#333] ml-[20px] font-medium">9718888056</h6>
            </div>
          </div>

          {/* Contact Info 2 */}
          <div className="hidden md:flex items-center gap-[10px] md:w-1/4">
            <div className="text-[#e95f5f] text-[20px]"><FaMapMarkerAlt /></div>
            <div>
              <p className="text-[#555] text-[14px] ml-[5px]">Opening Hours</p>
              <h6 className="text-[#333] ml-[20px] font-medium">24 X 7</h6>
            </div>
          </div>

          {/* Search Box - Desktop view */}
          <div className="hidden md:flex md:w-1/4 relative">
            <input
              type="search"
              placeholder="Search..."
              className="w-full border-b border-[#ccc] py-[5px] px-[10px] pr-[30px] outline-none focus:border-[#e95f5f]"
            />
            <div className="absolute right-[10px] top-[8px] text-[#504c4c] text-[16px]"><FaSearch /></div>
          </div>

          {/* Mobile Menu Button */}
          <div className="w-full md:hidden flex justify-end -mt-40">
            <button
              className="text-[#2c2c2c] text-[24px] p-[10px] cursor-pointer"
              onClick={toggleMenu}
            >
              <FaBars />
            </button>
          </div>

        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`bg-[#2c2c2c] ${menuOpen ? 'block' : 'hidden'} md:block`}>
        <div className="px-4 md:px-[90px]">
          <ul className="flex flex-col md:flex-row flex-wrap md:space-x-5">
            <li
              className="font-semibold text-[16px] text-white bg-[#ff5a4e] hover:bg-[#ff5a4e] px-[20px] py-[12px] cursor-pointer"
              onClick={() => window.location.href = "/"}
            >
              Home
            </li>

            {/* Services Dropdown */}
            <li className="relative group">
              <Link to="/services">
                <button
                  className="flex items-center text-white py-[15px] px-[20px] font-semibold text-[14px] uppercase hover:bg-[#ff5a4e] transition-all duration-300 w-full text-left"
                  onClick={() => toggleDropdown('services')}
                >
                  Services <FaChevronDown className="ml-[5px] text-[12px]" />
                </button>
              </Link>
              <ul className={`${dropdownOpen.services ? 'flex' : 'hidden'} md:hidden md:group-hover:flex absolute z-50 bg-white flex-col shadow-lg rounded min-w-[200px]`}>
                <li><a href="/services" className="block px-[20px] py-[12px] text-[#333] text-[14px] hover:bg-[#f5f5f5]">Our All Services</a></li>
                <li><a href="/emergency" className="block px-[20px] py-[12px] text-[#333] text-[14px] hover:bg-[#f5f5f5]">Accident & Emergency</a></li>
                <li><a href="/healthcheck" className="block px-[20px] py-[12px] text-[#333] text-[14px] hover:bg-[#f5f5f5]">Health Checks</a></li>
                <li><a href="/homecare" className="block px-[20px] py-[12px] text-[#333] text-[14px] hover:bg-[#f5f5f5]">Home Care</a></li>
                <li><a href="#" className="block px-[20px] py-[12px] text-[#333] text-[14px] hover:bg-[#f5f5f5]">Diabetes & Endocrinology</a></li>
                <li><a href="#" className="block px-[20px] py-[12px] text-[#333] text-[14px] hover:bg-[#f5f5f5]">ICU</a></li>
              </ul>
            </li>

            <li
              className="font-semibold text-[16px] text-white hover:bg-[#ff5a4e] px-[20px] py-[12px] cursor-pointer"
              onClick={() => window.location.href = "/gallery"}
            >
              Gallery
            </li>

            {/* About Dropdown */}
            <li className="relative group">
              <Link to="/about us">
                <button
                  className="flex items-center text-white py-[15px] px-[20px] font-semibold text-[14px] uppercase hover:bg-[#ff5a4e] transition-all duration-300 w-full text-left"
                  onClick={() => toggleDropdown('about')}
                >
                  About Us <FaChevronDown className="ml-[5px] text-[12px]" />
                </button>
              </Link>
              <ul className={`${dropdownOpen.about ? 'flex' : 'hidden'} md:hidden md:group-hover:flex absolute z-50 bg-white flex-col shadow-lg rounded min-w-[200px]`}>
                <li><a href="#" className="block px-[20px] py-[12px] text-[#333] hover:bg-[#f5f5f5]">About CSB</a></li>
                <li><a href="#" className="block px-[20px] py-[12px] text-[#333] hover:bg-[#f5f5f5]">Our Doctors</a></li>
                <li><a href="#" className="block px-[20px] py-[12px] text-[#333] hover:bg-[#f5f5f5]">Appointment</a></li>
                <li><a href="#" className="block px-[20px] py-[12px] text-[#333] hover:bg-[#f5f5f5]">Testimonial</a></li>
                <li><a href="#" className="block px-[20px] py-[12px] text-[#333] hover:bg-[#f5f5f5]">FAQ's</a></li>
                <li><a href="#" className="block px-[20px] py-[12px] text-[#333] hover:bg-[#f5f5f5]">Blood Test</a></li>
              </ul>
            </li>

            {/* Blog Dropdown */}
            <li className="relative group">
              <Link to="/blog">
                <button
                  className="flex items-center text-white py-[15px] px-[20px] font-semibold text-[14px] uppercase hover:bg-[#ff5a4e] transition-all duration-300 w-full text-left"
                  onClick={() => toggleDropdown('blog')}
                >
                  Blog <FaChevronDown className="ml-[5px] text-[12px]" />
                </button>
              </Link>
              <ul className={`${dropdownOpen.blog ? 'flex' : 'hidden'} md:hidden md:group-hover:flex absolute z-50 bg-white flex-col shadow-lg rounded min-w-[200px]`}>
                <li><a href="#" className="block px-[20px] py-[12px] text-[#333] hover:bg-[#f5f5f5]">Latest News</a></li>
                <li><a href="#" className="block px-[20px] py-[12px] text-[#333] hover:bg-[#f5f5f5]">Health Tips</a></li>
              </ul>
            </li>

            <li
              className="font-semibold text-[16px] text-white hover:bg-[#ff5a4e] px-[20px] py-[12px] cursor-pointer"
              onClick={() => window.location.href = "contact"}
            >
              Contact
            </li>

            {/* Last Button */}
            <li className="md:ml-auto relative">
              <button
                className="flex items-center justify-center text-white md:absolute md:right-10 md:top-0 py-[15px] px-[40px] font-semibold text-[14px] uppercase bg-[#ff5a4e] transition-all duration-300 w-full md:w-auto whitespace-nowrap"
              >
                I Want To <FaChevronDown className="ml-[5px] text-[12px]" />
              </button>
            </li>

          </ul>
        </div>
      </nav>
    </>
  );
};

export default MainHeader;
