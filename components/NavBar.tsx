import { FaFacebookSquare, FaDiscord, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

const NavBar = (): JSX.Element => (
	<nav className='bg-black'>
		<div className='max-w-screen-xl mx-auto py-4 flex justify-between'>
			<ul className='flex space-x-4 text-white text-lg font-bold self-center'>
				<a className='hover:text-guh-silver'>Home</a>
				<a className='hover:text-guh-silver'>Events</a>
				<a className='hover:text-guh-silver'>Committee</a>
				<a className='hover:text-guh-silver'>Contact</a>
				<a className='hover:text-guh-silver'>Gallery</a>
				<a className='hover:text-guh-silver'>Sponsors</a>
				<a className='hover:text-guh-silver'>GameDev</a>
			</ul>
			<div className='flex space-x-8'>
				<ul className='flex space-x-4 text-white text-lg font-bold self-center align-center'>
					<FaFacebookSquare size={24} />
					<FaTwitter size={24} />
					<FaInstagram size={24} />
					<FaDiscord size={24} />
					<FaGithub size={24} />
				</ul>
				<div className='text-white bg-guh-purple font-bold text-lg px-4 py-2'>Join Us</div>
			</div>
		</div>
	</nav>
);

export default NavBar;
