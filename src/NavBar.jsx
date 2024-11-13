import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';

const pages = [
    { label: 'About', href: '/#about', key: uuidv4() },
    { label: 'Events', href: '/#events', key: uuidv4(), scroll: true },
    { label: 'Committee', href: '/committee', key: uuidv4(), scroll: true },
    { label: 'Sponsors', href: '/sponsors', key: uuidv4() },
];

const UnderConstruction = () => {
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

const NavBar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <nav className="bg-black fixed top-0 left-0 right-0 z-10">
            <UnderConstruction />
            <div className="max-w-screen-xl mx-auto py-4 flex justify-center items-center">
                <div className="flex-shrink-0">
                    <a href="/">
                        <div className="logo-container">
                            <img src="logo.png" id="logo" alt="UniCS logo" />
                        </div>
                    </a>
                </div>

                <div style={{
                    position: 'absolute',
                    left: '48%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    gap: '2rem',
                    alignItems: 'center',
                    top: '40px'
                }} className="hidden md:flex">
                    {pages.map(({ label, href, key }) => (
                        <a
                            key={key}
                            href={href}
                            className="text-white hover:text-[#ffcc33] text-lg font-medium"
                        >
                            {label}
                        </a>
                    ))}
                </div>

                {/* <div className="ml-auto hidden md:block">
                    <a href="https://manchesterstudentsunion.com/activities/view/unics"
                       className="text-[#ffcc33] border-2 border-[#ffcc33] py-2 px-9 hover:bg-[#ffcc33] hover:text-black transition-colors duration-200">
                        Join Us
                    </a>
                </div> */}


            </div>


        </nav>
    );
};

export default NavBar;