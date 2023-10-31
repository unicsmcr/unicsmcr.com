'use client';
import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';



import '/app/style.css';


// Importing firebase
import db from './firebase';
import { Firestore, getDoc, getDocFromServer, query, where, getDocs, collection, doc } from 'firebase/firestore';
import { SponsorType } from './types/sponsor';



function SponsorItem({sponsor, setSponsorID} : {sponsor: SponsorType, setSponsorID: Dispatch<SetStateAction<string | undefined>>}) {
	const onClickHandler = (event: any) => {
		setSponsorID(sponsor.id)
	}

    // rest of your component code
	return (
		<div>
			<button onClick={ onClickHandler }>{ sponsor.name }</button>
		</div>
		
	)
}


function SponsorDetail({sponsorID} : {sponsorID: string | undefined}) {
	const sponsorDoc = doc(db, "sponsor", `${sponsorID}`);
	const [sponsor, setSponsor] = useState<SponsorType>({});


	async function getSponsorDetail() {
		const sponsorSnapshot = await getDoc(sponsorDoc);
		const newSponsorObj = {
			id: sponsorSnapshot.id,
			...sponsorSnapshot.data(),
		}
		setSponsor(newSponsorObj);
		console.log(sponsorSnapshot)
	} 

	useEffect(() => {
		getSponsorDetail()
	}, [sponsorID])

	
	return (
		<div style={{ fontSize: "60px" }}>
			{ sponsor.description }
		</div>
	)
}


const Sponsors = () => {

	const [sponsors, setSponsors] = useState<SponsorType[]>([])
	const [sponsorID, setSponsorID] = useState<string>()
	

	// method to query the database
	async function getSponsors() {
		// console.log("get sponsors called");
		const sponsorCol = collection(db, 'sponsor');
		const sponsorSnapshot = await getDocs(sponsorCol);
		const items : object[] = [];
		sponsorSnapshot.docs.map(doc => {
			// console.log(doc)
			const newSponsorObj = {
				id: doc.id,
				...doc.data()
			}
			items.push(newSponsorObj)
		});
		setSponsors(items);
	}

	// dabase effect
	useEffect(() => {
		getSponsors()
	}, [])

	// console.log(sponsors[0])
	useEffect(() => {
		console.log(sponsorID)
	}, [sponsorID])


	return (
		<>
			<div style={{ color: "white", fontSize: "120px", paddingTop: "70px" }}>
				<p>sponsor list</p>
				<div className='SponsorDiv'>
					{
						sponsors?.map((sponsor) => (
							<SponsorItem sponsor={sponsor} setSponsorID={setSponsorID}/>
						))
					}
				</div>

				<div className="Sponsor-detail">
					{ (sponsorID != "") && <SponsorDetail sponsorID={sponsorID}/>}
				</div>

			</div>
		</>
	);
};
export default Sponsors;
