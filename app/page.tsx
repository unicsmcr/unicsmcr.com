'use client';
import React from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import googleCalendarPlugin from "@fullcalendar/google-calendar";

const Hero = (): JSX.Element => (
	<section
		id="hero"
		className="flex justify-center items-center bg-black bg-center bg-repeat py-56 bg-blend-darken bg-cover"
	>
		<div className="flex items-center space-y-12 flex-col">
			<h1 className="text-9xl text-white bg-black font-bold p-4">
				Uni<span className="text-guh-green">CS</span>
			</h1>
			<div className="text-3xl text-white bg-black p-4 text-center leading-relaxed">
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
			<div className="bg-black">
				<section id="about" className="py-20 ">
					<div className="max-w-screen-xl mx-auto">
						<h2 className="text-6xl font-bold text-guh-green font-sans uppercase">About us</h2>
						<p className="pt-8 text-2xl text-white leading-relaxed">
							UniCS is the University of Manchester&#39;s tech society. We are a big community with a passion for
							technology and creating innovative solutions for everyone to enjoy. Through our hackathons and other
							events, we aim to bring students and industry closer together. When we aren&#39;t organising our own
							events we also travel to events in places like Barcelona, Helsinki, and Bordeaux, amongst other exotic
							destinations, often free due to various hackathon sponsors. Come join us to see what we get up to this
							year!
						</p>
					</div>
				</section>

				<section id="events" className="max-w-screen-xl mx-auto py-20">
					<h2 className="text-6xl text-unics-green font-bold font-sans uppercase">Events</h2>
					<p className="pt-8 text-2xl text-white leading-relaxed">
						Our events are suited to every level of knowledge and all degree courses. If you are someone who is
						interested in knowing how they can use computers to see an idea come to life, UniCS is the society for you.
						It doesn&#39;t matter if you have never touched a computer or been programming for years, you will never be
						bored at our events. And if you still aren&#39;t convinced, we have free pizza (and occasionally drinks).
					</p>
					<p className="pt-4 text-2xl text-white leading-relaxed py-20">
						You can keep up-to-date with our events and see a full list of them by following our Instagram page.
					</p>
					<p className="pt-4 text-2xl text-unics-green text-center leading-relaxed">
						More information about May Ball and GUH 23 coming soon!
						</p>
				</section>



					<section id="cal" className="mx-auto py-20 max-w-screen-xl ">
					<div className="text-3xl text-black bg-white p-4 leading-relaxed">
					<FullCalendar
						plugins={[
							dayGridPlugin,
							interactionPlugin,
							timeGridPlugin,
							googleCalendarPlugin,
						]}
						headerToolbar={{
							left: "",
							center: "title",
						    right: "",
							}}
							footerToolbar={{
								left: "",
								center: "prev,next",
								right: "",
                            }}
						initialView="dayGridMonth"
						nowIndicator={true}
						editable={true}
						selectable={true}
						dayMaxEvents={true}
						selectMirror={true}
						contentHeight={400}
						aspectRatio={1}
						events={{
							googleCalendarId:
								"98ae4449f97bb3e8675a6f4d1cd2037b7a00242d21af729b5b464781cef1f614@group.calendar.google.com",
						}}
						googleCalendarApiKey="AIzaSyCN_1HywiY6Z7LZXsVWoC8_fZH0GwOJOec"
					/>

						</div>
						</section>
						

				


							</div>
		</>
	);
};

export default Home;
