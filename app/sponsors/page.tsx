'use client';
import Marquee from 'react-fast-marquee';
import React, { useState, useEffect } from 'react';


import Image from "next/image";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import committeeData from '@data/committee2023_24.json';
import '/app/style.css';

// Importing firebase
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import db from './firebase';
import { Firestore } from 'firebase/firestore';
import { forEachChild } from 'typescript';
import { it } from 'node:test';
import { SponsorType } from './types/sponsor';



function SponsorItem({sponsor} : {sponsor: SponsorType}) {
    // rest of your component code
	return (
		<div className="sponsor">
			{ sponsor.name }
		</div>
	)
}


const Sponsors = () => {

	const [sponsors, setSponsors] = useState<SponsorType[]>([])

	// method to query the database
	async function getSponsors() {
		console.log("get sponsors called")
		const sponsorCol = collection(db, 'sponsor');
		const sponsolSnapshot = await getDocs(sponsorCol);
		const items : object[] = [];
		sponsolSnapshot.docs.map(doc => {
			items.push(doc.data());
		});
		setSponsors(items);
	}

	// dabase effect
	useEffect(() => {
		getSponsors()
	}, [])
	console.log(sponsors[0])
	


	return (
		<>
			<div style={{ color: "white", fontSize: "250px" }}>
				<p>sponsor list</p>
				<div className='SponsorDiv'>
					{
						sponsors?.map((sponsor) => (
							<SponsorItem sponsor={sponsor}/>
						))
					}
				</div>
			</div>
		</>
	);
};
export default Sponsors;
