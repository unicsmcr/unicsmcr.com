'use client';
import Marquee from 'react-fast-marquee';
import React, { useState } from 'react';


import Image from "next/image";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import committeeData from '@data/comittee.json';
import '/app/style.css';
function MyComponent() {
    const [myState, setMyState] = useState('initial value');
    
    // rest of your component code
  }
const Sponsors = () => {
	return (
        
		<section id="sponsors" className="mx-auto py-10 max-w-screen-xl ">
            <h2 className="text-6xl py-10 text-guh-green font-bold  font-sans uppercase">Our Sponsors</h2>
      <div className="container padded">
        <h1 className='text-2xl font-bold mb-4 text-guh-green'>Gold Sponsors</h1>
        <ul className="sponsors-list">
          <li id="bet365">
            <div className="sponsor-image">
              <a href="https://www.bet365.com/#/HO/" target="_blank"
                ><img src="assets/sponsors/bet365-bg.png"
              /></a>
            </div>
            <p className="sponsor-desc text-white">
              bet365, the world's leading online betting and gaming company, is
              a driving force in the development of enterprise and Internet
              technology. Delivering an unrivalled online experience to more
              than 63 million customers in 21 languages. Innovation continues to
              be our lifeblood and we pride ourselves on the standards of
              customer service we deliver. Driven by a shared vision to be the
              best in our industry, a technology team in excess of 1,600 people
              work in house to provide the technological advances that enable us
              to maintain our leadership position. Giving our teams the freedom
              to innovate is essential to our success. Our award winning
              business has worked hard to cultivate a culture of creativity
              where good ideas and a techno entrepreneurial attitude are
              encouraged and rewarded. Today we continue to push technological
              boundaries and break new ground in software innovation.
            </p>
          </li>
          <li id="qube-rt">
            <div className="sponsor-image">
              <a href="https://www.qube-rt.com/" target="_blank"
                ><img src="assets/sponsors/qube-rt-lack.png"
              /></a>
            </div>
            <p className="sponsor-desc text-white">
              Qube Research & Technologies (QRT) is a global quantitative and systematic investment manager,
              operating in all liquid asset classes across the world. We are a technology and data driven
              group implementing a scientific approach to investing. Combining data, research, technology
              and trading expertise has shaped QRT&#39;s collaborative mindset which enables us to solve the
              most complex challenges. QRT&#39;s culture of innovation continuously drives our ambition to
              deliver high quality returns for our investors.
            </p>
            </li>
        </ul>

        <h1 className='text-2xl font-bold mb-4 text-guh-green'>Silver Sponsors</h1>
        <ul className="sponsors-list">
          <li id="booking">
            <div className="sponsor-image">
              <a href="https://www.booking.com/content/about.en-gb.html?aid=356980&label=gog235jc-1FCBQoggJCBWFib3V0SDNYA2hQiAEBmAEJuAEXyAEM2AEB6AEB-AEMiAIBqAIDuALaoICeBsACAdICJDJhNjgxN2VjLTU5ODEtNGY4Zi1hM2YwLTdmMzhkYTBmZWRkZdgCBuACAQ&sid=8d2e7f7c44719f3d97a6535a216b914c" target="_blank"
                ><img src="assets/sponsors/booking.png"
              /></a>
            </div>
            <p className="sponsor-desc text-white">
              Founded in 1996 in Amsterdam, Booking.com has grown from a small Dutch
              startup to one of the world&#39;s leading digital travel companies. Part of
              Booking Holdings Inc. (NASDAQ: BKNG), Booking.com&#39;s mission is to make it
              easier for everyone to experience the world.

              By investing in the technology that helps take the friction out of travel,
              Booking.com seamlessly connects millions of travellers with memorable experiences,
              a range of transport options and incredible places to stay - from homes to hotels
              and much more. As one of the world&#39;s largest travel marketplaces for both established
              brands and entrepreneurs of all sizes, Booking.com enables properties all over the
              world to reach a global audience and grow their businesses.

              Booking.com is available in 43 languages and offers more than 28 million total
              reported accommodation listings, including over 6.6 million listings alone of homes,
              apartments and other unique places to stay. No matter where you want to go or what
              you want to do, Booking.com makes it easy and backs it all up with 24/7 customer support.
            </p>
          </li>
          <li id="bloomberg">
            <div className="sponsor-image">
              <a href="https://www.bloomberg.com/company" target="_blank"
                ><img src="assets/sponsors/bloomberg-bg.png"
              /></a>
            </div>
            <p className="sponsor-desc text-white">
              Bloomberg, the global business and financial information and news leader,
              gives influential decision makers a critical edge by connecting them to a
              dynamic network of information, people and ideas. The company&#39;s strength —
              delivering data, news and analytics through innovative technology, quickly
              and accurately — is at the core of the Bloomberg Terminal. Bloomberg\&#39;s enterprise
              solutions build on the company&#39;s core strength: leveraging technology to allow
              customers to access, integrate, distribute and manage data and information
              across organizations more efficiently and effectively.
            </p>
          </li>
        </ul>

      </div>

					<h3 className="text-2xl text-guh-green pt-10 pb-10"> Over the past few years we have been sponsored by:</h3>
					<Marquee gradient={false} className="grayscale invert max-width:100% ">
						<div className="mx-5">
							<a href="">
								<img className="h-16" src="assets/sponsors/image255.png" />
							</a>
						</div>
						<div className="mx-5">
							<a href="">
								<img className="h-16" src="assets/sponsors/image315.png" />
							</a>
						</div>
						<div className="mx-5">
							<a href="">
								<img className="h-16" src="assets/sponsors/image327.png" />
							</a>
						</div>
						<div className="mx-5">
							<a href="">
								<img className="h-16" src="assets/sponsors/image339.png" />
							</a>
						</div>
						<div className="mx-5">
							<a href="">
								<img className="h-16" src="assets/sponsors/image387.png" />
							</a>
						</div>
						<div className="mx-5">
							<a href="">
								<img className="h-16" src="assets/sponsors/image483.png" />
							</a>
						</div>
						<div className="mx-5">
							<a href="">
								<img className="h-16" src="assets/sponsors/image507.png" />
							</a>
						</div>
						<div className="mx-5">
							<a href="">
								<img className="h-16" src="assets/sponsors/image543.png" />
							</a>
						</div>
						<div className="mx-5">
							<a href="">
								<img className="h-16" src="assets/sponsors/image591.png" />
							</a>
						</div>
						<div className="mx-5">
							<a href="">
								<img className="h-16" src="assets/sponsors/image651.png" />
							</a>
						</div>
						<div className="mx-5">
							<a href="">
								<img className="h-16" src="assets/sponsors/image783.png" />
							</a>
						</div>
						<div className="mx-5">
							<a href="">
								<img className="h-16" src="assets/sponsors/image1362.png" />
							</a>
						</div>
						<div className="mx-5">
							<a href="">
								<img className="h-16" src="assets/sponsors/image1374.png" />
							</a>
						</div>
						<div className="mx-5">
							<a href="">
								<img className="h-16" src="assets/sponsors/image1398.png" />
							</a>
						</div>
						<div className="mx-5">
							<a href="">
								<img className="h-16" src="assets/sponsors/image1480.png" />
							</a>
						</div>
						<div className="mx-5">
							<a href="">
								<img className="h-16" src="assets/sponsors/image1504.png" />
							</a>
						</div>
						<div className="mx-5">
							<a href="">
								<img className="h-16" src="assets/sponsors/image255.png" />
							</a>
						</div>
						<div className="mx-5">
							<a href="">
								<img className="h-16" src="assets/sponsors/image315.png" />
							</a>
						</div>
						<div className="mx-5">
							<a href="">
								<img className="h-16" src="assets/sponsors/image327.png" />
							</a>
						</div>
						<div className="mx-5">
							<a href="">
								<img className="h-16" src="assets/sponsors/image339.png" />
							</a>
						</div>
						<div className="mx-5">
							<a href="">
								<img className="h-16" src="assets/sponsors/image387.png" />
							</a>
						</div>
						<div className="mx-5">
							<a href="">
								<img className="h-16" src="assets/sponsors/image483.png" />
							</a>
						</div>
						<div className="mx-5">
							<a href="">
								<img className="h-16" src="assets/sponsors/image507.png" />
							</a>
						</div>
						<div className="mx-5">
							<a href="">
								<img className="h-16" src="assets/sponsors/image543.png" />
							</a>
						</div>
						<div className="mx-5">
							<a href="">
								<img className="h-16" src="assets/sponsors/image591.png" />
							</a>
						</div>
						<div className="mx-5">
							<a href="">
								<img className="h-16" src="assets/sponsors/image651.png" />
							</a>
						</div>
						<div className="mx-5">
							<a href="">
								<img className="h-16" src="assets/sponsors/image783.png" />
							</a>
						</div>
						<div className="mx-5">
							<a href="">
								<img className="h-16" src="assets/sponsors/image1362.png" />
							</a>
						</div>
						<div className="mx-5">
							<a href="">
								<img className="h-16" src="assets/sponsors/image1374.png" />
							</a>
						</div>
						<div className="mx-5">
							<a href="">
								<img className="h-16" src="assets/sponsors/image1398.png" />
							</a>
						</div>
						<div className="mx-5">
							<a href="">
								<img className="h-16" src="assets/sponsors/image1480.png" />
							</a>
						</div>
						<div className="mx-5">
							<a href="">
								<img className="h-16" src="assets/sponsors/image1504.png" />
							</a>
						</div>
						<div className="mx-5">
							<a href="">
								<img className="h-16" src="assets/sponsors/image255.png" />
							</a>
						</div>
						<div className="mx-5">
							<a href="">
								<img className="h-16" src="assets/sponsors/image315.png" />
							</a>
						</div>
						<div className="mx-5">
							<a href="">
								<img className="h-16" src="assets/sponsors/image327.png" />
							</a>
						</div>
						<div className="mx-5">
							<a href="">
								<img className="h-16" src="assets/sponsors/image339.png" />
							</a>
						</div>
						<div className="mx-5">
							<a href="">
								<img className="h-16" src="assets/sponsors/image387.png" />
							</a>
						</div>
						<div className="mx-5">
							<a href="">
								<img className="h-16" src="assets/sponsors/image483.png" />
							</a>
						</div>
						<div className="mx-5">
							<a href="">
								<img className="h-16" src="assets/sponsors/image507.png" />
							</a>
						</div>
						<div className="mx-5">
							<a href="">
								<img className="h-16" src="assets/sponsors/image543.png" />
							</a>
						</div>
						<div className="mx-5">
							<a href="">
								<img className="h-16" src="assets/sponsors/image591.png" />
							</a>
						</div>
						<div className="mx-5">
							<a href="">
								<img className="h-16" src="assets/sponsors/image651.png" />
							</a>
						</div>
						<div className="mx-5">
							<a href="">
								<img className="h-16" src="assets/sponsors/image783.png" />
							</a>
						</div>
						<div className="mx-5">
							<a href="">
								<img className="h-16" src="assets/sponsors/image1362.png" />
							</a>
						</div>
						<div className="mx-5">
							<a href="">
								<img className="h-16" src="assets/sponsors/image1374.png" />
							</a>
						</div>
						<div className="mx-5">
							<a href="">
								<img className="h-16" src="assets/sponsors/image1398.png" />
							</a>
						</div>
						<div className="mx-5">
							<a href="">
								<img className="h-16" src="assets/sponsors/image1480.png" />
							</a>
						</div>
						<div className="mx-5">
							<a href="">
								<img className="h-16" src="assets/sponsors/image1504.png" />
							</a>
						</div>
						<div className="mx-5">
							<a href="">
								<img className="h-16" src="assets/sponsors/image255.png" />
							</a>
						</div>
						<div className="mx-5">
							<a href="">
								<img className="h-16" src="assets/sponsors/image315.png" />
							</a>
						</div>
						<div className="mx-5">
							<a href="">
								<img className="h-16" src="assets/sponsors/image327.png" />
							</a>
						</div>
						<div className="mx-5">
							<a href="">
								<img className="h-16" src="assets/sponsors/image339.png" />
							</a>
						</div>
						<div className="mx-5">
							<a href="">
								<img className="h-16" src="assets/sponsors/image387.png" />
							</a>
						</div>
						<div className="mx-5">
							<a href="">
								<img className="h-16" src="assets/sponsors/image483.png" />
							</a>
						</div>
						<div className="mx-5">
							<a href="">
								<img className="h-16" src="assets/sponsors/image507.png" />
							</a>
						</div>
						<div className="mx-5">
							<a href="">
								<img className="h-16" src="assets/sponsors/image543.png" />
							</a>
						</div>
						<div className="mx-5">
							<a href="">
								<img className="h-16" src="assets/sponsors/image591.png" />
							</a>
						</div>
						<div className="mx-5">
							<a href="">
								<img className="h-16" src="assets/sponsors/image651.png" />
							</a>
						</div>
						<div className="mx-5">
							<a href="">
								<img className="h-16" src="assets/sponsors/image783.png" />
							</a>
						</div>
						<div className="mx-5">
							<a href="">
								<img className="h-16" src="assets/sponsors/image1362.png" />
							</a>
						</div>
						<div className="mx-5">
							<a href="">
								<img className="h-16" src="assets/sponsors/image1374.png" />
							</a>
						</div>
						<div className="mx-5">
							<a href="">
								<img className="h-16" src="assets/sponsors/image1398.png" />
							</a>
						</div>
						<div className="mx-5">
							<a href="">
								<img className="h-16" src="assets/sponsors/image1480.png" />
							</a>
						</div>
						<div className="mx-5">
							<a href="">
								<img className="h-16" src="assets/sponsors/image1504.png" />
							</a>
						</div>
					</Marquee>
				</section>
	);
};
export default Sponsors;
