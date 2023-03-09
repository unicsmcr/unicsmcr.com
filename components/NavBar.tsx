import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookSquare, FaDiscord, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import logo from '../public/logov2.svg';

const pages = [
	{ label: 'Home', href: '/', key: uuidv4() },
	{ label: 'Events', href: '../#events', key: uuidv4(), scroll: false },
	{ label: 'Committee', href: '../#comittee', key: uuidv4(), scroll: false },
	{ label: 'Sponsors', href: '../#sponsors', key: uuidv4() },
];

const NavBar = (): JSX.Element => (
	<nav className='bg-black'>
		<div className='max-w-screen-xl mx-auto py-4 flex justify-between items-center'>
			<Image src={logo} width={64} height={64} alt='UniCS logo' />
			<div className='flex space-x-4 text-white text-lg font-bold self-center'>
				{pages.map(({ label, href, key, scroll = true }) => (
							<Link key={key} href={href} scroll={scroll} className='hover:underline hover:underline-offset-8'>
								{label}
							</Link>
							
						))}

			</div>
			<a href="https://unicsmcr.com/join" className='text-guh-green text-lg border-2 border-guh-green py-2 px-9'>
				Join Us
			</a>
		</div>
	</nav>
);

export default NavBar;
