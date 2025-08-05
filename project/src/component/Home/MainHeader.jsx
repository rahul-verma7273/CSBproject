import React, { useState } from 'react';
import { FaMapMarkerAlt, FaSearch, FaBars, FaChevronDown } from 'react-icons/fa';
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const MainHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    services: false,
    about: false,
    blog: false,
    iwantto: false
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
      {/* Top Mobile Sticky Bar */}
      <div className="bg-gray-200 py-2 sticky top-0 z-50 md:static">
        <ul className="flex justify-center gap-4 text-center list-none px-3 m-0">
          {['Account', 'Login', 'Register', 'Appointment', 'Contact'].map((item, index) => (
            <li
              key={index}
              className="text-gray-500 text-xs sm:text-sm cursor-pointer whitespace-nowrap hover:text-gray-700 transition"
              onClick={() => window.location.href = "#"}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Logo & Contact Info */}
      <div className="py-6 px-4 md:px-[80px] sticky top-8 bg-white z-40 md:static">
        <div className="flex flex-wrap items-center justify-between">
          {/* Logo */}
          <div className="w-full md:w-1/4 flex justify-start mb-2 md:mb-0">
            <img
              src="src/assets/image/csb_logo.jpg"
              alt="CSB Logo"
              className="w-[200px] h-[50px] md:w-[256px] md:h-[60px] object-contain cursor-pointer"
              onClick={() => window.location.href = '/'}
            />
          </div>

          {/* Mobile Search */}
          <div className="w-full mb-2 md:hidden relative">
            <input
              type="search"
              placeholder="Search..."
              className="w-full border-b border-[#ccc] py-1 px-2 pr-8 outline-none focus:border-[#e95f5f]"
            />
            <div className="absolute right-2 top-2 text-[#504c4c] text-[16px]">
              <FaSearch />
            </div>
          </div>

          {/* Phone & Location (Desktop only) */}
          <div className="hidden md:flex md:w-1/4 items-center gap-2">
            <FaPhoneAlt className="text-[#e95f5f] text-xl" />
            <div>
              <p className="text-sm text-[#555]">Customer Support</p>
              <h6 className="text-base font-medium text-[#333]">9718888056</h6>
            </div>
          </div>

          <div className="hidden md:flex md:w-1/4 items-center gap-2">
            <FaMapMarkerAlt className="text-[#e95f5f] text-xl" />
            <div>
              <p className="text-sm text-[#555]">Opening Hours</p>
              <h6 className="text-base font-medium text-[#333]">24 X 7</h6>
            </div>
          </div>

          {/* Desktop Search */}
          <div className="hidden md:block md:w-1/4 relative">
            <input
              type="search"
              placeholder="Search..."
              className="w-full border-b border-[#ccc] py-1 px-2 pr-8 outline-none focus:border-[#e95f5f]"
            />
            <div className="absolute right-2 top-2 text-[#504c4c] text-[16px]">
              <FaSearch />
            </div>
          </div>

          {/* Hamburger (Mobile only) */}
          <div className="w-full md:hidden flex justify-end">
            <button onClick={toggleMenu} className="text-[#2c2c2c] text-2xl p-2">
              <FaBars />
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`bg-[#2c2c2c] bg-opacity-95 backdrop-blur-sm sticky top-[146px] md:top-0 z-40 ${menuOpen ? 'block' : 'hidden'} md:block`}>
        <div className="px-4 md:px-[90px] relative">

          {/* ❌ Close Button for Mobile */}
          <div className="md:hidden flex justify-end pt-4 pr-2">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-white text-2xl focus:outline-none"
              aria-label="Close Menu"
            >
              &times;
            </button>
          </div>

          <ul className="flex flex-col md:flex-row md:space-x-5">
            {/* Static Links */}
            <li className="text-white font-semibold px-5 py-3 bg-[#ff5a4e] cursor-pointer" onClick={() => window.location.href = "/"}>Home</li>

            {/* Dropdowns */}
            {[
              {
                key: 'services',
                label: 'Services',
                items: [
                  { text: 'Our All Services', link: '/services' },
                  { text: 'Accident & Emergency', link: '/emergency' },
                  { text: 'Health Checks', link: '/healthcheck' },
                  { text: 'Home Care', link: '/homecare' },
                  { text: 'Diabetes & Endocrinology', link: '/diabetes' },
                  { text: 'ICU', link: '#' }
                ]
              },
              {
                key: 'about',
                label: 'About Us',
                items: [
                  { text: 'About CSB', link: '#' },
                  { text: 'Our Doctors', link: '#' },
                  { text: 'Appointment', link: '#' },
                  { text: 'Testimonial', link: '#' },
                  { text: 'FAQ\'s', link: '#' }
                ]
              },
              {
                key: 'blog',
                label: 'Blog',
                items: [
                  { text: 'Latest News', link: '#' },
                  { text: 'Health Tips', link: '#' }
                ]
              }
            ].map(menu => (
              <li key={menu.key} className="relative group">
                <button
                  className="flex items-center text-white px-5 py-4 font-semibold uppercase text-sm hover:bg-[#ff5a4e] w-full md:w-auto"
                  onClick={() => toggleDropdown(menu.key)}
                >
                  {menu.label} <FaChevronDown className="ml-1 text-xs" />
                </button>

                {/* Dropdown List */}
                <ul className={`z-50 bg-white shadow-lg rounded-md flex-col min-w-[200px] absolute top-full left-0 max-h-[60vh] overflow-y-auto
                  ${dropdownOpen[menu.key] ? 'flex' : 'hidden'} 
                  md:hidden group-hover:flex`}>
                  {menu.items.map((item, index) => (
                    <li key={index}>
                      <a href={item.link} className="block px-5 py-3 text-[#333] text-sm hover:bg-[#f5f5f5]">{item.text}</a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}

            <li className="text-white font-semibold px-5 py-3 hover:bg-[#ff5a4e] cursor-pointer" onClick={() => window.location.href = "/gallery"}>Gallery</li>

            <li className="text-white font-semibold px-5 py-3 hover:bg-[#ff5a4e] cursor-pointer" onClick={() => window.location.href = "/contact"}>Contact</li>

            {/* I Want To */}
            <li className="relative group md:ml-auto">
              <button
                className="flex items-center justify-center text-white px-8 py-4 font-semibold uppercase text-sm bg-[#ff5a4e] w-full md:w-auto"
                onClick={() => toggleDropdown('iwantto')}
              >
                I Want To <FaChevronDown className="ml-1 text-xs" />
              </button>
              <ul className={`z-50 bg-white shadow-lg rounded-md flex-col min-w-[150px] absolute top-full right-0 max-h-[60vh] overflow-y-auto
                ${dropdownOpen.iwantto ? 'flex' : 'hidden'} 
                md:hidden group-hover:flex`}>
                <li><a href="/appointment" className="block px-5 py-3 text-[#333] text-sm hover:bg-[#f5f5f5]">Book Appointment</a></li>
                <li><a href="/blood-test" className="block px-5 py-3 text-[#333] text-sm hover:bg-[#f5f5f5]">Blood Test</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default MainHeader;
