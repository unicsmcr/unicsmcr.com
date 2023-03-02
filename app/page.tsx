'use client';
import './style.css';
import Marquee from 'react-fast-marquee';
import { useState, useEffect } from 'react';

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
				<section id='sponsors' className='mx-auto py-10'>
					<Marquee gradient={false}>
						<div className='mx-5'>
							<a href='https://www.bet365.com/#/HO/'>
								<img className='h-16' src='assets/sponsors/bet365.png' />
							</a>
						</div>
						<div className='mx-5'>
							<a href='https://www.qube-rt.com/'>
								<img className='h-16' src='assets/sponsors/qube-rt.png' />
							</a>
						</div>
						<div className='mx-5'>
							<a href='https://www.booking.com/content/about.en-gb.html?aid=356980&label=gog235jc-1FCBQoggJCBWFib3V0SDNYA2hQiAEBmAEJuAEXyAEM2AEB6AEB-AEMiAIBqAIDuALaoICeBsACAdICJDJhNjgxN2VjLTU5ODEtNGY4Zi1hM2YwLTdmMzhkYTBmZWRkZdgCBuACAQ&sid=8d2e7f7c44719f3d97a6535a216b914c'>
								<img className='h-16' src='assets/sponsors/booking.png' />
							</a>
						</div>
						<div className='mx-5'>
							<a href='https://www.bloomberg.com/company'>
								<img className='h-16' src='assets/sponsors/bloomberg.png' />
							</a>
						</div>
						<div className='mx-5'>
							<a href='https://www.bet365.com/#/HO/'>
								<img className='h-16' src='assets/sponsors/bet365.png' />
							</a>
						</div>
						<div className='mx-5'>
							<a href='https://www.qube-rt.com/'>
								<img className='h-16' src='assets/sponsors/qube-rt.png' />
							</a>
						</div>
						<div className='mx-5'>
							<a href='https://www.booking.com/content/about.en-gb.html?aid=356980&label=gog235jc-1FCBQoggJCBWFib3V0SDNYA2hQiAEBmAEJuAEXyAEM2AEB6AEB-AEMiAIBqAIDuALaoICeBsACAdICJDJhNjgxN2VjLTU5ODEtNGY4Zi1hM2YwLTdmMzhkYTBmZWRkZdgCBuACAQ&sid=8d2e7f7c44719f3d97a6535a216b914c'>
								<img className='h-16' src='assets/sponsors/booking.png' />
							</a>
						</div>
						<div className='mx-5'>
							<a href='https://www.bloomberg.com/company'>
								<img className='h-16' src='assets/sponsors/bloomberg.png' />
							</a>
						</div>
						<div className='mx-5'>
							<a href='https://www.bet365.com/#/HO/'>
								<img className='h-16' src='assets/sponsors/bet365.png' />
							</a>
						</div>
						<div className='mx-5'>
							<a href='https://www.qube-rt.com/'>
								<img className='h-16' src='assets/sponsors/qube-rt.png' />
							</a>
						</div>
						<div className='mx-5'>
							<a href='https://www.booking.com/content/about.en-gb.html?aid=356980&label=gog235jc-1FCBQoggJCBWFib3V0SDNYA2hQiAEBmAEJuAEXyAEM2AEB6AEB-AEMiAIBqAIDuALaoICeBsACAdICJDJhNjgxN2VjLTU5ODEtNGY4Zi1hM2YwLTdmMzhkYTBmZWRkZdgCBuACAQ&sid=8d2e7f7c44719f3d97a6535a216b914c'>
								<img className='h-16' src='assets/sponsors/booking.png' />
							</a>
						</div>
						<div className='mx-5'>
							<a href='https://www.bloomberg.com/company'>
								<img className='h-16' src='assets/sponsors/bloomberg.png' />
							</a>
						</div>
					</Marquee>
				</section>
			</div>
			<section id='committee' className='section'>
				<div className='container padded'>
					<h1>Committee</h1>
					<ul id='committee-list'>
						<li>
							<img src='assets/people/gwydion.jpg' alt='Gwydion Smit' />
							<p className='name'>Gwydion Smit</p>
							<p className='role'>Co-Chair</p>
						</li>
						<li>
							<img src='assets/people/germaine.jpg' alt='Germaine George' />
							<p className='name'>Germaine George</p>
							<p className='role'>Co-Chair</p>
						</li>
						<li>
							<img src='assets/people/ali.jpg' alt='Ali Lakho' />
							<p className='name'>Ali Lakho</p>
							<p className='role'>Treasurer</p>
						</li>
						<li>
							<img src='assets/people/joshua.jpg' alt='Joshua Simanullang' />
							<p className='name'>Joshua Simanullang</p>
							<p className='role'>Secretary</p>
						</li>
						<li>
							<img src='assets/people/sambbhav.jpg' alt='Sambbhav Khare' />
							<p className='name'>Sambbhav Khare</p>
							<p className='role'>Dev Officer</p>
						</li>
						<li>
							<img src='assets/people/mehar.jpg' alt='Mehar Mehta' />
							<p className='name'>Mehar Mehta</p>
							<p className='role'>PR Officer</p>
						</li>
						<li>
							<img src='/assets/people/dhruv.jpg' alt='Dhruv Sharma' />
							<p className='name'>Graphics Officer</p>
							<p className='role'>dhruv</p>
						</li>
						<li>
							<img src='assets/people/dhrishaj.jpg' alt='Dhrishaj Garg' />
							<p className='name'>Dhrishaj Garg</p>
							<p className='role'>Events Officer</p>
						</li>
						<li>
							<img src='assets/people/mj.jpg' alt='MJ Ponsonby' />
							<p className='name'>MJ Ponsonby</p>
							<p className='role'>Game Dev Head</p>
						</li>
						<li>
							<img src='assets/people/siqi.jpg' alt='Siqi Li' />
							<p className='name'>Siqi Li</p>
							<p className='role'>Procurement Officer</p>
						</li>
						<li>
							<img src='assets/people/keshav.jpg' alt='Keshav Gupta' />
							<p className='name'>Keshav Gupta</p>
							<p className='role'>May Ball Officer</p>
						</li>
						<li>
							<img src='assets/people/mihir.jpg' alt='Mihirr M Bhaagwat' />
							<p className='name'>Mihirr M Bhaagwat</p>
							<p className='role'>Co-Hackathon Lead</p>
						</li>
						<li>
							<img src='assets/people/mateusz.jpg' alt='Mateusz Krajewski' />
							<p className='name'>Mateusz Krajewski</p>
							<p className='role'>Co-Hackathon Lead</p>
						</li>
					</ul>
				</div>
			</section>
		</>
	);
};

export default Home;
