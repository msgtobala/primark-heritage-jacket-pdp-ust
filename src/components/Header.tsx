import React, { useState } from 'react';
import logo from '../assets/images/logo.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    'RITA ORA',
    'WOMEN',
    'MEN',
    'HOLIDAY',
    'KIDS',
    'FURNITURE',
    'HALLOWEEN',
    'HOME',
    'BEAUTY',
    'COLLABS',
    'EXPLORE'
  ];

  return (
    <header className="bg-white border-gray-200">
      <div className="max-w-container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 4k:px-container-x">
        <div className="flex items-center h-12 sm:h-14 md:h-16 lg:h-18">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src={logo} 
              alt="Nordstrom" 
              className="h-6 sm:h-7 md:h-6 lg:h-6 w-auto"
            />
          </div>

          {/* Search Bar - Desktop and Tablet - positioned close to logo */}
          <div className="hidden md:flex ml-6 lg:ml-8 xl:ml-12">
            <div className="relative w-64 md:w-80 lg:w-[500px] xl:w-[707px]">
              <div className="absolute inset-y-0 left-0 pl-3 lg:pl-4 flex items-center pointer-events-none">
                <span className="material-icons-outlined text-[#878A92] text-lg lg:text-xl">search</span>
              </div>
              <input
                type="text"
                placeholder="Search products or brands"
                className="block w-full pl-10 lg:pl-12 pr-3 lg:pr-4 py-2 lg:py-3 border border-[#E0E0E0] rounded leading-5 bg-white placeholder-[#878A92] text-[#878A92] focus:outline-none focus:placeholder-[#878A92] focus:ring-2 focus:ring-black focus:border-transparent text-sm lg:text-base"
                style={{ borderRadius: '4px' }}
              />
            </div>
          </div>

          {/* Spacer to push right icons to the end */}
          <div className="flex-1"></div>

          {/* Right Icons */}
          <div className="flex items-center space-x-1 sm:space-x-2">
            {/* Account Icon */}
            <button className="p-1.5 sm:p-2 text-gray-600 hover:text-black transition-colors rounded-full hover:bg-gray-100">
              <span className="material-icons-outlined text-xl sm:text-2xl">account_circle</span>
            </button>

            {/* Cart Icon - removed margin right */}
            <button className="p-1.5 sm:p-2 text-gray-600 hover:text-black transition-colors rounded-full hover:bg-gray-100">
              <span className="material-icons-outlined text-xl sm:text-2xl">shopping_cart</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-1.5 sm:p-2 text-gray-600 hover:text-black transition-colors rounded-full hover:bg-gray-100"
            >
              <span className="material-icons-outlined text-xl sm:text-2xl">menu</span>
            </button>
          </div>
        </div>

        {/* Navigation Menu - Desktop */}
        <nav className="hidden lg:block border-t border-gray-200">
          <div className="flex justify-between pt-6 pb-6">
            {navigationItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-black hover:text-gray-600 transition-colors whitespace-nowrap font-regular"
                style={{ fontSize: '18px', fontWeight: '400' }}
              >
                {item}
              </a>
            ))}
          </div>
        </nav>

        {/* Tablet Navigation Menu */}
        <nav className="hidden md:block lg:hidden border-t border-gray-200">
          <div className="grid grid-cols-4 gap-2 pt-6 pb-6">
            {navigationItems.slice(0, 8).map((item) => (
              <a
                key={item}
                href="#"
                className="text-black hover:text-gray-600 transition-colors text-center py-2 font-regular"
                style={{ fontSize: '18px', fontWeight: '400' }}
              >
                {item}
              </a>
            ))}
          </div>
          <div className="grid grid-cols-4 gap-2 pb-6">
            {navigationItems.slice(8).map((item) => (
              <a
                key={item}
                href="#"
                className="text-black hover:text-gray-600 transition-colors text-center py-2 font-regular"
                style={{ fontSize: '18px', fontWeight: '400' }}
              >
                {item}
              </a>
            ))}
          </div>
        </nav>

        {/* Mobile Search Bar */}
        <div className="md:hidden py-3 border-t border-gray-200">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="material-icons-outlined text-[#878A92] text-lg">search</span>
            </div>
            <input
              type="text"
              placeholder="Search products or brands"
              className="block w-full pl-10 pr-3 py-2.5 border border-[#E0E0E0] rounded leading-5 bg-white placeholder-[#878A92] text-[#878A92] focus:outline-none focus:placeholder-[#878A92] focus:ring-2 focus:ring-black focus:border-transparent text-sm"
              style={{ borderRadius: '4px' }}
            />
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav className="md:hidden border-t border-gray-200 py-4">
            <div className="grid grid-cols-2 gap-3 pt-6 pb-6">
              {navigationItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-black hover:text-gray-600 transition-colors py-2 text-center font-regular"
                  style={{ fontSize: '18px', fontWeight: '400' }}
                >
                  {item}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;