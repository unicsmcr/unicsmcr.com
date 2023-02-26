import './style.css';

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
			<section id='sponsors' className='section'>
				<div className='container padded'>
					<h1>Our Sponsors</h1>
					<p>
						Interested in sponsoring us? <a href='#contact'>Contact us</a> below to find out more!
					</p>
				</div>
				<div className='container padded'>
					<h1>Gold Sponsors</h1>
					<ul className='sponsors-list'>
						<li id='bet365'>
							<div className='sponsor-image'>
								<a href='https://www.bet365.com/#/HO/' target='_blank'>
									<img src='assets/sponsors/bet365.png' />
								</a>
							</div>
							<p className='sponsor-desc'>
								bet365, the world's leading online betting and gaming company, is a driving force in the development of
								enterprise and Internet technology. Delivering an unrivalled online experience to more than 63 million
								customers in 21 languages. Innovation continues to be our lifeblood and we pride ourselves on the
								standards of customer service we deliver. Driven by a shared vision to be the best in our industry, a
								technology team in excess of 1,600 people work in house to provide the technological advances that
								enable us to maintain our leadership position. Giving our teams the freedom to innovate is essential to
								our success. Our award winning business has worked hard to cultivate a culture of creativity where good
								ideas and a techno entrepreneurial attitude are encouraged and rewarded. Today we continue to push
								technological boundaries and break new ground in software innovation.
							</p>
						</li>
						<li id='qube-rt'>
							<div className='sponsor-image'>
								<a href='https://www.qube-rt.com/' target='_blank'>
									<img src='assets/sponsors/qube-rt.png' />
								</a>
							</div>
							<p className='sponsor-desc'>
								Qube Research and Technologies (QRT) is a global quantitative and systematic investment manager,
								operating in all liquid asset classes across the world. We are a technology and data driven group
								implementing a scientific approach to investing. Combining data, research, technology and trading
								expertise has shaped QRT’s collaborative mindset which enables us to solve the most complex challenges.
								QRT’s culture of innovation continuously drives our ambition to deliver high quality returns for our
								investors.
							</p>
						</li>
					</ul>

					<h1>Silver Sponsors</h1>
					<ul className='sponsors-list'>
						<li id='booking'>
							<div className='sponsor-image'>
								<a
									href='https://www.booking.com/content/about.en-gb.html?aid=356980&label=gog235jc-1FCBQoggJCBWFib3V0SDNYA2hQiAEBmAEJuAEXyAEM2AEB6AEB-AEMiAIBqAIDuALaoICeBsACAdICJDJhNjgxN2VjLTU5ODEtNGY4Zi1hM2YwLTdmMzhkYTBmZWRkZdgCBuACAQ&sid=8d2e7f7c44719f3d97a6535a216b914c'
									target='_blank'
								>
									<img src='assets/sponsors/booking.png' />
								</a>
							</div>
							<p className='sponsor-desc'>
								Founded in 1996 in Amsterdam, Booking.com has grown from a small Dutch startup to one of the world’s
								leading digital travel companies. Part of Booking Holdings Inc. (NASDAQ: BKNG), Booking.com’s mission is
								to make it easier for everyone to experience the world. By investing in the technology that helps take
								the friction out of travel, Booking.com seamlessly connects millions of travellers with memorable
								experiences, a range of transport options and incredible places to stay - from homes to hotels and much
								more. As one of the world’s largest travel marketplaces for both established brands and entrepreneurs of
								all sizes, Booking.com enables properties all over the world to reach a global audience and grow their
								businesses. Booking.com is available in 43 languages and offers more than 28 million total reported
								accommodation listings, including over 6.6 million listings alone of homes, apartments and other unique
								places to stay. No matter where you want to go or what you want to do, Booking.com makes it easy and
								backs it all up with 24/7 customer support.
							</p>
						</li>
						<li id='bloomberg'>
							<div className='sponsor-image'>
								<a href='https://www.bloomberg.com/company' target='_blank'>
									<img src='assets/sponsors/bloomberg.png' />
								</a>
							</div>
							<p className='sponsor-desc'>
								Bloomberg, the global business and financial information and news leader, gives influential decision
								makers a critical edge by connecting them to a dynamic network of information, people and ideas. The
								company’s strength — delivering data, news and analytics through innovative technology, quickly and
								accurately — is at the core of the Bloomberg Terminal. Bloomberg’s enterprise solutions build on the
								company’s core strength: leveraging technology to allow customers to access, integrate, distribute and
								manage data and information across organizations more efficiently and effectively.
							</p>
						</li>
					</ul>
				</div>
			</section>
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
