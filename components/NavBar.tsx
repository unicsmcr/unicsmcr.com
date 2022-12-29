import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookSquare, FaDiscord, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import logo from '../public/logov2.svg';

const pages = [
	{ label: 'Home', href: '/', key: uuidv4() },
	{ label: 'Events', href: '/#events', key: uuidv4(), scroll: false },
	{ label: 'Committee', href: '/#comittee', key: uuidv4(), scroll: false },
	{ label: 'Gallery', href: '/gallery', key: uuidv4() },
	{ label: 'Sponsors', href: '/sponsors', key: uuidv4() },
	{ label: 'GameDev', href: '/gamedev', key: uuidv4() },
];

const NavBar = (): JSX.Element => (
	<nav className='bg-guh-black'>
		<div className='max-w-screen-xl mx-auto py-4 flex justify-between'>
			<div className='flex self-center space-x-8'>
				<Image src={logo} width={64} height={64} alt='UniCS logo' />
				<ul className='flex space-x-4 text-white text-lg font-bold self-center'>
					{pages.map(({ label, href, key, scroll = true }) => (
						<Link key={key} href={href} scroll={scroll} className='hover:underline hover:underline-offset-8'>
							{label}
						</Link>
					))}
				</ul>
			</div>
			<div className='flex self-center space-x-8'>
				<ul className='flex space-x-4 text-white text-lg font-bold self-center align-center'>
					<a href='https://www.facebook.com/unicsmcr'>
						<FaFacebookSquare size={24} />
					</a>
					<a href='https://twitter.com/unicsmcr_'>
						<FaTwitter size={24} />
					</a>
					<a href='https://www.instagram.com/unicsmcr/'>
						<FaInstagram size={24} />
					</a>
					<a href='https://github.com/unicsmcr'>
						<FaGithub size={24} />
					</a>
					<a href='https://unicsmcr.com/discord'>
						<FaDiscord size={24} />
					</a>
				</ul>
				<Link href='https://unicsmcr.com/join' className='text-white bg-guh-purple font-bold text-lg px-4 py-2'>
					Join Us
				</Link>
			</div>
		</div>
	</nav>
);

export default NavBar;
