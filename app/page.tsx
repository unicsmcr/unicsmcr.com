import { FaFacebookSquare, FaDiscord, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

const Hero = (): JSX.Element => (
	<section
		id='hero'
		className='flex justify-center items-center bg-hero-img bg-center bg-repeat py-56 bg-blend-darken bg-cover'
	>
		<div className='flex items-center space-y-12 flex-col'>
			<h1 className='text-6xl text-white bg-black font-bold p-4'>
				Uni<span className='text-guh-gold'>CS</span>
			</h1>
			<div className='text-2xl text-white bg-black p-4 text-center leading-relaxed'>
				<p>University of Manchester</p>
				<p>Computer Science Society</p>
			</div>
		</div>
	</section>
);

const Home = (): JSX.Element => {
	return (
		<>
			<Hero />
			<div className='bg-guh-silver'>
				<section id='about' className='bg-guh-gold py-20 clip-diagonal'>
					<div className='max-w-screen-xl mx-auto'>
						<h2 className='text-6xl font-bold text-black'>About us</h2>
						<p className='pt-8 text-xl text-black leading-relaxed'>
							About us UniCS is the University of Manchester&#39;s tech society. We are a big community with a passion
							for technology and creating innovative solutions for everyone to enjoy. Through our hackathons and other
							events, we aim to bring students and industry closer together. When we aren&#39;t organising our own
							events we also travel to events in places like Barcelona, Helsinki, and Bordeaux, amongst other exotic
							destinations, often free due to various hackathon sponsors. Come join us to see what we get up to this
							year!
						</p>
					</div>
				</section>
				<section id='events' className='max-w-screen-xl mx-auto py-20'>
					<h2 className='text-6xl text-black font-bold'>Events</h2>
					<p className='pt-8 text-xl text-black leading-relaxed'>
						Our events are suited to every level of knowledge and all degree courses. If you are someone who is
						interested in knowing how they can use computers to see an idea come to life, UniCS is the society for you.
						It doesn&#39;t matter if you have never touched a computer or been programming for years, you will never be
						bored at our events. And if you still aren&#39;t convinced, we have free pizza (and occasionally drinks).
					</p>
					<p className='pt-4 text-xl text-black leading-relaxed'>
						You can keep up-to-date with our events and see a full list of them by following our Facebook page.
					</p>
				</section>
			</div>
		</>
	);
};

export default Home;
