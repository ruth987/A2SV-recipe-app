"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='bg-gray-800'>
      <div className='container mx-auto'>
        <nav className='flex items-center justify-between py-4'>
          <div className='flex items-center'>
            <Link href='/recipes'>
              <div className='text-white text-lg font-semibold'>Home</div>
            </Link>
            <Link href='/about'>
              <div className='text-white text-lg font-semibold ml-4'>About</div>
            </Link>
          </div>
          <div className='md:hidden'>
            <button
              onClick={toggleMenu}
              className='text-white focus:outline-none'
            >
              <svg
                className='h-6 w-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                {isOpen ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>
        {isOpen && (
          <div className='md:hidden'>
            <ul className='mt-2'>
              <li>
                <Link href='/recipes'>
                  <div className='block text-white font-semibold'>Home</div>
                </Link>
              </li>
              <li className='mt-2'>
                <Link href='/about'>
                  <div className='block text-white font-semibold'>About</div>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
