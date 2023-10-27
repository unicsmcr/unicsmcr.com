"use client";
import Marquee from 'react-fast-marquee';
import React, {useEffect, useState}  from 'react';
import { app, database } from "../../firebase.js";
import { collection, addDoc, getDocs } from "firebase/firestore";

import '/app/style.css';
interface Sponsor {
    ID: string | null;
    Name: string;
    Active: boolean;
    Tier: string;
    Description: string;
    Link: string;
    Logo: string;
} 

interface Opportunity {
    ID: string;
    sponsorID: string;
    Description: string;
    DataOfPost: Date;
    Deadline: Date;
    Link: string;
    TypeOfRole: string;
    Field: string;
    Location: Geolocation;
}

const Sponsors = () => {
    const db = collection(database, "sponsors"); 
    const [sponsors, setSponsors] = useState<Sponsor[]>([]);
    const addSponsor = async (sponsor: Sponsor) => {
        const docRef = await addDoc(db, sponsor); //..
    }

    useEffect(() => {
        const getSponsors = async () => {
            const querySnapshot = await getDocs(db);
            const sponsorData = querySnapshot.docs.map((doc) => doc.data() as Sponsor);
            setSponsors(sponsorData);
        }

        getSponsors();
    }, []); 
    
    // now create sponsors HTML..
    const sponsorToHTML = (sponsor: Sponsor) => {
        return (
            <li id={sponsor.Name}>
                <div className="sponsor-image">
                <a href={sponsor.Link} target="_blank"
                    ><img src={sponsor.Logo}
                /></a>
                </div>
                <p className="sponsor-desc text-white">
                {sponsor.Description}
                </p>
            </li>
        )
    }

    //await getSponsors(); // top level await not allowed.. use useEffect
        
    /*addSponsor(
        {
            ID: null,
            Name: "bet365",
            Active: true,
            Tier: "Gold",
            Description: "bet365, the world's leading online betting and gaming company, is a driving force in the development of enterprise and Internet technology. Delivering an unrivalled online experience to more than 63 million customers in 21 languages. Innovation continues to be our lifeblood and we pride ourselves on the standards of customer service we deliver. Driven by a shared vision to be the best in our industry, a technology team in excess of 1,600 people work in house to provide the technological advances that enable us to maintain our leadership position. Giving our teams the freedom to innovate is essential to our success. Our award winning business has worked hard to cultivate a culture of creativity where good ideas and a techno entrepreneurial attitude are encouraged and rewarded. Today we continue to push technological boundaries and break new ground in software innovation.",
            Link: "https://www.bet365.com/#/HO/",
            Logo: "assets/sponsors/bet365-bg.png"
        }
    )*/

	return (
    <section id="sponsors" className="mx-auto py-10 max-w-screen-xl pt-40">
        <h2 className="text-6xl py-10 text-guh-green font-bold  font-sans uppercase">Our Sponsors</h2>
        <div className="container padded">

            <h1 className='text-2xl font-bold mb-4 text-guh-green'>Gold Sponsors</h1>
            <ul className="sponsors-list">
                {sponsors
                .filter((sponsor) => sponsor.Tier === "Gold")
                .map((sponsor) => (
                    <React.Fragment>
                        {sponsorToHTML(sponsor)}
                    </React.Fragment>
                ))}
            </ul>
            <h1 className='text-2xl font-bold mb-4 text-guh-green'>Silver Sponsors</h1>
            <ul className="sponsors-list">
                {sponsors
                .filter((sponsor) => sponsor.Tier === "Gold")
                .map((sponsor) => (
                    <React.Fragment>
                        {sponsorToHTML(sponsor)}
                    </React.Fragment>
                ))}
            </ul>
        </div>

            <h3 className="text-2xl text-guh-green pt-10 pb-10"> Over the past few years we have been sponsored by:</h3>
            <Marquee gradient={false} className="grayscale invert max-width:100% ">
                {sponsors
                .filter((sponsor) => sponsor.Active === false)
                .map((sponsor) => (
                    <React.Fragment>
                        <div className="mx-5">
                            <a href="">
                                <img className="h-16" src={sponsor.Logo}/>
                            </a>
                        </div>
                    </React.Fragment>
                ))}
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
