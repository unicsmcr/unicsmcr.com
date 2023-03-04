import { FaFacebookSquare, FaDiscord, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = (): JSX.Element => (
	<footer className='bg-guh-black py-8'>
		<div className='max-w-screen-xl mx-auto text-center text-guh-grey text-sm'>
			<p className='flex space-x-4 text-guh-grey text-lg font-bold self-center align-center justify-center pb-4'><a href="mailto:contact@unicsmcr.com">Contact Us</a></p>
			<ul className='flex space-x-4 text-guh-grey text-lg font-bold self-center align-center justify-center pb-4'>
				<a href='https://www.facebook.com/unicsmcr'>
					<FaFacebookSquare size={32} />
				</a>
				<a href='https://twitter.com/unicsmcr_'>
					<FaTwitter size={32} />
				</a>
				<a href='https://www.instagram.com/unicsmcr/'>
					<FaInstagram size={32} />
				</a>
				<a href='https://github.com/unicsmcr'>
					<FaGithub size={32} />
				</a>
				<a href='https://unicsmcr.com/discord'>
					<FaDiscord size={32} />
				</a>
			</ul>
			<p>&copy; Copyright 2018&ndash;{new Date().getFullYear()} UniCS</p>
			<p>All rights reserved</p>
		</div>
	</footer>
);

export default Footer;
