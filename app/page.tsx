import Image from 'next/image';
import cover from '../assets/cover.jpg';

const Home = () => {
	return (
		<>
			<section
				id='hero'
				className='flex justify-center items-center bg-hero-img bg-center bg-repeat py-56 bg-blend-darken bg-cover'
			>
				<div className='flex items-center space-y-12 flex-col'>
					<h1 className='text-6xl text-white bg-black font-bold p-4'>
						Uni<span className='text-guh-gold'>CS</span>
					</h1>
					<h2 className='text-2xl text-white bg-black p-4 text-center leading-relaxed'>
						University of Manchester
						<br /> Computer Science Society
					</h2>
				</div>
			</section>
			<div className='bg-guh-silver'>
				<section className='bg-guh-gold py-20 clip-diagonal'>
					<div className='max-w-screen-xl mx-auto'>
						<h2 className='text-6xl font-bold text-black'>About us</h2>
						<p className='pt-8 text-2xl text-black leading-relaxed'>
							About us UniCS is the University of Manchester&#39;s tech society. We are a big community with a passion
							for technology and creating innovative solutions for everyone to enjoy. Through our hackathons and other
							events, we aim to bring students and industry closer together. When we aren&#39;t organising our own
							events we also travel to events in places like Barcelona, Helsinki, and Bordeaux, amongst other exotic
							destinations, often free due to various hackathon sponsors. Come join us to see what we get up to this
							year!
						</p>
					</div>
				</section>
				<section className='max-w-screen-xl mx-auto py-20'>
					<h2 className='text-6xl text-black font-bold'>Events</h2>
					<p className='pt-8 text-2xl text-black leading-relaxed'>
						Our events are suited to every level of knowledge and all degree courses. If you are someone who is
						interested in knowing how they can use computers to see an idea come to life, UniCS is the society for you.
						It doesn&#39;t matter if you have never touched a computer or been programming for years, you will never be
						bored at our events. And if you still aren&#39;t convinced, we have free pizza (and occasionally drinks).
					</p>
					<p className='pt-4 text-2xl text-black leading-relaxed'>
						You can keep up-to-date with our events and see a full list of them by following our Facebook page.
					</p>
				</section>
			</div>

			{/* <div className={styles.description}>
				<p>
					Get started by editing&nbsp;
					<code className={styles.code}>app/page.tsx</code>
				</p>
				<div>
					<a
						href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
						target='_blank'
						rel='noopener noreferrer'
					>
						By{' '}
						<Image src='/vercel.svg' alt='Vercel Logo' className={styles.vercelLogo} width={100} height={24} priority />
					</a>
				</div>
			</div>

			<div className={styles.center}>
				<Image className={styles.logo} src='/next.svg' alt='Next.js Logo' width={180} height={37} priority />
				<div className={styles.thirteen}>
					<Image src='/thirteen.svg' alt='13' width={40} height={31} priority />
				</div>
			</div>

			<div className={styles.grid}>
				<a
					href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
					className={styles.card}
					target='_blank'
					rel='noopener noreferrer'
				>
					<h2 className={inter.className}>
						Docs <span>-&gt;</span>
					</h2>
					<p className={inter.className}>Find in-depth information about Next.js features and&nbsp;API.</p>
				</a>

				<a
					href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
					className={styles.card}
					target='_blank'
					rel='noopener noreferrer'
				>
					<h2 className={inter.className}>
						Learn <span>-&gt;</span>
					</h2>
					<p className={inter.className}>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
				</a>

				<a
					href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
					className={styles.card}
					target='_blank'
					rel='noopener noreferrer'
				>
					<h2 className={inter.className}>
						Templates <span>-&gt;</span>
					</h2>
					<p className={inter.className}>Discover and deploy boilerplate example Next.js&nbsp;projects.</p>
				</a>

				<a
					href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
					className={styles.card}
					target='_blank'
					rel='noopener noreferrer'
				>
					<h2 className={inter.className}>
						Deploy <span>-&gt;</span>
					</h2>
					<p className={inter.className}>Instantly deploy your Next.js site to a shareable URL with&nbsp;Vercel.</p>
				</a>
			</div> */}
		</>
	);
};

export default Home;
