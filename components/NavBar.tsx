'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { FaFacebookSquare, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import logo from '../public/logov2.svg';

const pages = [
	{ label: 'About', href: '/#about', key: uuidv4() },
	{ label: 'Events', href: '/#events', key: uuidv4(), scroll: true },
	{ label: 'Committee', href: '/committee', key: uuidv4(), scroll: true },
	{ label: 'Sponsors', href: '/sponsors', key: uuidv4() },
];

const UnderConstruction = (): JSX.Element => {
	console.log("under construction appears");
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setIsVisible(true), 600);
		return () => clearTimeout(timer);
	}, []);

	if (!isVisible) return null;

	return (
		<div 
		style={{
			position: 'fixed',
			top: '0px',
			left: '48%',
			transform: 'translateX(-50%)',
			width: '75%',
			maxWidth: '600px',
			backgroundColor: '#8B4513',
			color: 'white',
			textAlign: 'center',
			padding: '0.5rem',
			fontWeight: 'bold',
			fontSize: '1rem',
			zIndex: 9999,
			borderRadius: '25px',
			boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			gap: '10px'
		}}>
			<div style={{ position: 'relative', width: '60px', height: '25px', marginRight: '10px' }}>
				<FontAwesomeIcon icon={faCog} spin style={{ position: 'absolute', left: 0, fontSize: '30px' }} />
				<FontAwesomeIcon icon={faCog} spin style={{ position: 'absolute', right: 18, fontSize: '13px' }} />
			</div>
			<div style={{ position: 'relative', width: '30px', height: '5px', marginRight: '10px' }}>
				<FontAwesomeIcon icon={faCog} spin style={{ position: 'absolute', right: 60, fontSize: '20px' }} />
			</div>
			<span>Website under construction!</span>
		</div>
	);
};

const NavBar = (): JSX.Element => {
	const [showMobileMenu, setShowMobileMenu] = useState(false);

	return (
		<nav className="bg-black fixed top-0 left-0 right-0 z-10">
			<UnderConstruction /> {/* Adding the UnderConstruction component */}
			<div className="max-w-screen-xl mx-auto py-4 flex justify-center items-center">
				<div className="flex-shrink-0">
					<Link href="/">
						<Image src={logo} width={64} height={64} alt="UniCS logo" />
					</Link>
				</div>

				<div className="hidden md:flex justify-center items-center space-x-4 text-white text-lg font-bold ml-auto">
					{pages.map(({ label, href, key, scroll = true }) => (
						<a key={key} href={href} className="hover:underline hover:underline-offset-8">
							{label}
						</a>
					))}
				</div>
				<div className="ml-auto hidden md:block">
					<a href="https://manchesterstudentsunion.com/activities/view/unics" className="text-guh-green text-lg border-2 border-guh-green py-2 px-9">
						Join Us
					</a>
				</div>
				<div className="md:hidden ml-auto">
					<button className="text-white p-2" onClick={() => setShowMobileMenu(!showMobileMenu)}>
						{showMobileMenu ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
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
								className="block p-4 hover:bg-gray-800 text-white text-lg text-center justify-center"
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



