"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookSquare, FaDiscord, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import logo from '../public/logov2.svg';

const pages = [
  { label: 'Home', href: '/', key: uuidv4() },
  { label: 'Events', href: '#events', key: uuidv4(), scroll: true },
  { label: 'Committee', href: '#committee', key: uuidv4(), scroll: true },
  { label: 'Sponsors', href: '#sponsors', key: uuidv4() },
];

const NavBar = (): JSX.Element => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <nav className='bg-black'>
      <div className='max-w-screen-xl mx-auto py-4 flex justify-center items-center'>
        <div className='flex-shrink-0'>
          <Image src={logo} width={64} height={64} alt='UniCS logo' />
        </div>
	
        <div className='hidden md:flex justify-center items-center space-x-4 text-white text-lg font-bold ml-auto'>
          {pages.map(({ label, href, key, scroll = true }) => (
            <a key={key} href={href} className='hover:underline hover:underline-offset-8'>
              {label}
            </a>
			
          ))}
          
        </div>
		<div className="ml-auto hidden md:block">
            <a href='https://unicsmcr.com/join' className='text-guh-green text-lg border-2 border-guh-green py-2 px-9'>
              Join Us
            </a>
          </div>
        <div className='md:hidden ml-auto'>
          <button
            className='text-white p-2'
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            {showMobileMenu ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div className={`md:hidden ${showMobileMenu ? 'block' : 'hidden'}`}>
		<div className="flex flex-col justify-between h-full">
					<div>
					{pages.map(({ label, href, key, scroll = true }) => (
						<a
						key={key}
						href={href}
						className='block p-4 hover:bg-gray-800 text-white text-lg text-center justify-center'
						onClick={() => setShowMobileMenu(false)}
						>
						{label}
						</a>
					))}
					</div>
		</div>
	 </div>
    </nav>
  );
};

export default NavBar;

