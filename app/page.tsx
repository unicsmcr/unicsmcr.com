"use client";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import { Calendar } from "@fullcalendar/core";
import googleCalendarPlugin from "@fullcalendar/google-calendar";

const Hero = (): JSX.Element => (
  <section
    id="hero"
    className="flex justify-center items-center bg-black bg-center bg-repeat py-56 bg-blend-darken bg-cover"
  >
    <div className="flex items-center space-y-12 flex-col">
      <h1 className="text-6xl text-white bg-black font-bold p-4">
        Uni<span className="text-guh-green">CS</span>
      </h1>
      <div className="text-2xl text-white bg-black p-4 text-center leading-relaxed">
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
      <div className="bg-guh-silver">
        <section id="about" className="bg-guh-green py-20 clip-diagonal">
          <div className="max-w-screen-xl mx-auto">
            <h2 className="text-6xl font-bold text-black">About us</h2>
            <p className="pt-8 text-xl text-black leading-relaxed">
              About us UniCS is the University of Manchester&#39;s tech society.
              We are a big community with a passion for technology and creating
              innovative solutions for everyone to enjoy. Through our hackathons
              and other events, we aim to bring students and industry closer
              together. When we aren&#39;t organising our own events we also
              travel to events in places like Barcelona, Helsinki, and Bordeaux,
              amongst other exotic destinations, often free due to various
              hackathon sponsors. Come join us to see what we get up to this
              year!
            </p>
          </div>
        </section>

        <section id="events" className="max-w-screen-xl mx-auto py-20">
          <h2 className="text-6xl text-black font-bold">Events</h2>
          <p className="pt-8 text-xl text-black leading-relaxed">
            Our events are suited to every level of knowledge and all degree
            courses. If you are someone who is interested in knowing how they
            can use computers to see an idea come to life, UniCS is the society
            for you. It doesn&#39;t matter if you have never touched a computer
            or been programming for years, you will never be bored at our
            events. And if you still aren&#39;t convinced, we have free pizza
            (and occasionally drinks).
          </p>
          <p className="pt-4 text-xl text-black leading-relaxed">
            You can keep up-to-date with our events and see a full list of them
            by following our Facebook page.
          </p>

          <FullCalendar
            plugins={[
              dayGridPlugin,
              interactionPlugin,
              timeGridPlugin,
              googleCalendarPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek",
            }}
            initialView="timeGridWeek"
            nowIndicator={true}
            editable={true}
            selectable={true}
            selectMirror={true}
            events={{
              googleCalendarId:
                "98ae4449f97bb3e8675a6f4d1cd2037b7a00242d21af729b5b464781cef1f614@group.calendar.google.com",
            }}
            googleCalendarApiKey="AIzaSyCN_1HywiY6Z7LZXsVWoC8_fZH0GwOJOec"
          />
        </section>

        <section id="sponsors" className="mx-auto py-10 max-w-screen-xl">
		<h2 className="text-6xl text-black font-bold">Sponsors</h2>
              <div className="grid grid-cols-2 gap-3">

                    <a href="https://www.qube-rt.com/">
                      <img className="w-21 gap-2" src="assets/sponsors/qube-rt.png" />
                    </a>
                    <a href="https://www.bet365.com/#/HO/">
                      <img className="w-35 space-y-80" src="assets/sponsors/bet365.png" />
                    </a>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <a href="https://www.booking.com/content/about.en-gb.html?aid=356980&label=gog235jc-1FCBQoggJCBWFib3V0SDNYA2hQiAEBmAEJuAEXyAEM2AEB6AEB-AEMiAIBqAIDuALaoICeBsACAdICJDJhNjgxN2VjLTU5ODEtNGY4Zi1hM2YwLTdmMzhkYTBmZWRkZdgCBuACAQ&sid=8d2e7f7c44719f3d97a6535a216b914c">
                  <img className="h-25  gap-4" src="assets/sponsors/booking.png" />
                </a>
             
     
                <a href="https://www.bloomberg.com/company">
                  <img className="h-30 w-25 gap-4 " src="assets/sponsors/bloomberg.png" />
                </a>

              </div>
            
              
              
          

   
              
            
    {/* <h3 className="text-2xl text-black space-y-px"> Previous Sponsors</h3> */}
          <Marquee gradient={false}>
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
            {/* <div className="mx-5">
              <a href="https://www.bet365.com/#/HO/">
                <img className="h-16" src="assets/sponsors/bet365.png" />
              </a>
            </div>
            <div className="mx-5">
              <a href="https://www.qube-rt.com/">
                <img className="h-16" src="assets/sponsors/qube-rt.png" />
              </a>
            </div>
            <div className="mx-5">
              <a href="https://www.booking.com/content/about.en-gb.html?aid=356980&label=gog235jc-1FCBQoggJCBWFib3V0SDNYA2hQiAEBmAEJuAEXyAEM2AEB6AEB-AEMiAIBqAIDuALaoICeBsACAdICJDJhNjgxN2VjLTU5ODEtNGY4Zi1hM2YwLTdmMzhkYTBmZWRkZdgCBuACAQ&sid=8d2e7f7c44719f3d97a6535a216b914c">
                <img className="h-16" src="assets/sponsors/booking.png" />
              </a>
            </div>
            <div className="mx-5">
              <a href="https://www.bloomberg.com/company">
                <img className="h-16" src="assets/sponsors/bloomberg.png" />
              </a>
            </div> */}
          </Marquee>
        </section>
        <section id="committee" className="bg-guh-green">
					<div className="max-w-screen-xl mx-auto">
					<h2 className="text-6xl text-black font-bold">Committee</h2>
          <ul
            id="committee-list"
            className="pt-8 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4"
          >
            <li className="flex flex-col mx-auto hover:-translate-y-1 items-center content-around">
              <Image
                width={128}
                height={128}
                quality={100}
                className="h-32 w-32 rounded-full"
                src="/assets/people/gwydion.jpg"
                alt="Gwydion Smit"
              />
              <p className="text-center text-lg font-bold">Gwydion Smit</p>
              <p className="text-center text-md">Co-Chair</p>
            </li>
            <li className="flex flex-col mx-auto hover:-translate-y-1 items-center content-around">
              <Image
                width={128}
                height={128}
                quality={100}
                className="h-32 w-32 rounded-full"
                src="/assets/people/germaine.jpg"
                alt="Germaine George"
              />
              <p className="text-center text-lg font-bold">Germaine George</p>
              <p className="text-center text-md">Co-Chair</p>
            </li>
            <li className="flex flex-col mx-auto hover:-translate-y-1 items-center content-around">
              <Image
                width={128}
                height={128}
                quality={100}
                className="h-32 w-32 rounded-full"
                src="/assets/people/ali.jpg"
                alt="Ali Lakho"
              />
              <p className="text-center text-lg font-bold">Ali Lakho</p>
              <p className="text-center text-md">Treasurer</p>
            </li>
            <li className="flex flex-col mx-auto hover:-translate-y-1 items-center content-around">
              <Image
                width={128}
                height={128}
                quality={100}
                className="w-32 h-32 rounded-full"
                src="/assets/people/joshua.jpg"
                alt="Joshua Simanullang"
              />
              <p className="text-center text-lg font-bold">
                Joshua Simanullang
              </p>
              <p className="text-center text-md">Secretary</p>
            </li>
            <li className="flex flex-col mx-auto hover:-translate-y-1 items-center content-around">
              <Image
                width={128}
                height={128}
                quality={100}
                className="h-32 w-32 rounded-full"
                src="/assets/people/sambbhav.jpg"
                alt="Sambbhav Khare"
              />
              <p className="text-center text-lg font-bold">Sambbhav Khare</p>
              <p className="text-center text-md">Dev Officer</p>
            </li>
            <li className="flex flex-col mx-auto hover:-translate-y-1 items-center content-around">
              <Image
                width={128}
                height={128}
                quality={100}
                className="h-32 w-32 rounded-full"
                src="/assets/people/mehar.jpg"
                alt="Mehar Mehta"
              />
              <p className="text-center text-lg font-bold">Mehar Mehta</p>
              <p className="text-center text-md">PR Officer</p>
            </li>
            <li className="flex flex-col mx-auto hover:-translate-y-1 items-center content-around">
              <Image
                width={128}
                height={128}
                quality={100}
                className="h-32 w-32 rounded-full"
                src="/assets/people/dhruv.jpg"
                alt="Dhruv Sharma"
              />
              <p className="text-center text-lg font-bold">Graphics Officer</p>
              <p className="text-center text-md">dhruv</p>
            </li>
            <li className="flex flex-col mx-auto hover:-translate-y-1 items-center content-around">
              <Image
                width={128}
                height={128}
                className="h-32 w-32 rounded-full"
                src="/assets/people/dhrishaj.jpg"
                alt="Dhrishaj Garg"
              />
              <p className="text-center text-lg font-bold">Dhrishaj Garg</p>
              <p className="text-center text-md">Events Officer</p>
            </li>
            <li className="flex flex-col mx-auto hover:-translate-y-1 items-center content-around">
              <Image
                width={128}
                height={128}
                className="h-32 w-32 rounded-full"
                src="/assets/people/mj.jpg"
                alt="MJ Ponsonby"
              />
              <p className="text-center text-lg font-bold">MJ Ponsonby</p>
              <p className="text-center text-md">Game Dev Head</p>
            </li>
            <li className="flex flex-col mx-auto hover:-translate-y-1 items-center content-around">
              <Image
                width={128}
                height={128}
                quality={100}
                className="h-32 w-32 rounded-full"
                src="/assets/people/siqi.jpg"
                alt="Siqi Li"
              />
              <p className="text-center text-lg font-bold">Siqi Li</p>
              <p className="text-center text-md">Procurement Officer</p>
            </li>
            <span />
            <li className="flex flex-col mx-auto hover:-translate-y-1 items-center content-around">
              <Image
                width={128}
                height={128}
                quality={100}
                className="h-32 w-32 rounded-full"
                src="/assets/people/keshav.jpg"
                alt="Keshav Gupta"
              />
              <p className="text-center text-lg font-bold">Keshav Gupta</p>
              <p className="role">May Ball Officer</p>
            </li>
            <li className="flex flex-col mx-auto hover:-translate-y-1 items-center content-around">
              <Image
                width={128}
                height={128}
                quality={100}
                className="h-32 w-32 rounded-full"
                src="/assets/people/mihir.jpg"
                alt="Mihirr M Bhaagwat"
              />
              <p className="text-center text-lg font-bold">Mihirr M Bhaagwat</p>
              <p className="text-center text-md">Co-Hackathon Lead</p>
            </li>
            <li className="flex flex-col mx-auto hover:-translate-y-1 items-center content-around">
              <Image
                width={128}
                height={128}
                quality={100}
                className="h-32 w-32 rounded-full"
                src="/assets/people/mateusz.jpg"
                alt="Mateusz Krajewski"
              />
              <p className="text-center text-lg font-bold">Mateusz Krajewski</p>
              <p className="text-center text-md">Co-Hackathon Lead</p>
            </li>
          </ul>
					</div>
        </section>
      </div>
    </>
  );
};

export default Home;
