'use client';
import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import '/app/style.css';
import fs from 'fs';

// Importing firebase
import { database } from '../../../firebase';
import {
    Firestore,
    getDoc,
    getDocFromServer,
    query,
    where,
    getDocs,
    collection,
    doc,
    addDoc,
    setDoc
} from 'firebase/firestore';
import { SponsorType, submitSponsorType } from '../types/sponsor';
import {any} from "prop-types";

function CreateSponsorForm() {

    const [sponsorName, setSponsorName] = useState<string>("");
    const [sponsorActiveStatus, setSponsorActiveStatus] = useState<Boolean>(true);
    const [sponsorTier, setSponsorTier] = useState<string>("");
    const [sponsorDescription, setSponsorDescription] = useState<string>("");
    const [sponsorLink, setSponsorLink] = useState<string>("");
    
    // submitting hotel data to firebase
    async function submitSponsor(sponsorData: submitSponsorType) {
        const sponsorCol = collection(database, 'sponsor');
        const newSponsor = await addDoc(sponsorCol, sponsorData);
        console.log(`The new hotel was created at ${newSponsor.path}`)
    }

    const addNewSponsor = (e:  React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // submitHotel()
        // submitSponsor({
        //     name: sponsorName,
        //     description: sponsorDescription
        // });


        console.log("successfully created a new sponsor")
    }

    useEffect(() => {
        console.log("sponsor name: " + sponsorName)
        console.log("sponsor description: " + sponsorDescription)
        console.log("sponsor tier: " + sponsorTier)
    }, [sponsorName, sponsorDescription, sponsorTier]);

    return (
        <div style={{ color: "white", fontSize: "30px", paddingTop: "70px", paddingLeft:"20px" }}>
            <h2> Add new sponsor </h2>
            <form onSubmit={(e) => addNewSponsor(e)}>
                <label>Sponsor name: </label>
                <input style={{ color: "black", fontSize:"30px" }}
                    type="text" required value={sponsorName} onChange={(event) => {setSponsorName(event.target.value)}}/>
                <br/>
                <br/>
                <label>Sponsor tier: </label>
                <select name={"sponsor-tier"} id={"sponsor-tier"} style={{color: "black"}}
                    onChange={(event) => {setSponsorTier(event.target.value)}}>
                    <option value={"gold"}>gold</option>
                    <option value={"silver"}>silver</option>
                </select>
                <br/>
                <br/>
                <label>Sponsor description: </label>
                <input style={{ color: "black", fontSize:"30px" }}
                       type="text" required value={sponsorDescription} onChange={(event) => {setSponsorDescription(event.target.value)}}/>
                <br/>
                <br/>
                <label>Sponsor link: </label>
                <input style={{ color: "black", fontSize:"30px" }}
                       type="text" required value={sponsorLink} onChange={(event) => {setSponsorLink(event.target.value)}}/>
                <br/>
                <br/>
                <input type="submit" value={"add new sponsor"}/>
            </form>
        </div>

    )
}

function EditSponsorForm() {
    // configure sponsors
    const sponsorCol = collection(database, "game sessions");

    const [sponsorList, setSponsorList] = useState<SponsorType[]>([])
    const [selectedSponsorID, setSelectedSponsorID] = useState<string>("")
    const [selectedSponsorName, setSelectedSponsorName] = useState<string>("");
    const [selectedSponsorDescription, setSelectedSponsorDescription] = useState<string>("");
    async function getSponsors() {
        // console.log("get sponsors called");
        const sponsorSnapshot = await getDocs(sponsorCol);
        console.log(sponsorSnapshot)
        const items : object[] = [];
        sponsorSnapshot.docs.map(doc => {
            // console.log(doc)
            const newSponsorObj = {
                id: doc.id,
                ...doc.data()
            }
            console.log(newSponsorObj)
            items.push(newSponsorObj)
        });
        setSponsorList(items);
    }

    useEffect(() => {
        getSponsors();
    });

    // setCurrentSelectedSponsor, sponsor name and sponsor description
    useEffect(() => {
        for (const sponsor of sponsorList) {
            if (sponsor.id == selectedSponsorID) {
                setSelectedSponsorID(sponsor.id)
                // @ts-ignore
                setSelectedSponsorDescription(sponsor.description)
                // @ts-ignore
                setSelectedSponsorName(sponsor.name)
            }
        }
        console.log(`selected sponsor ID: ${selectedSponsorID}`);
        console.log(`selected sponsor description: ${selectedSponsorDescription}`)
        console.log(`selected sponsor name: ${selectedSponsorName}`)
    }, [selectedSponsorID]);

    useEffect(() => {
        console.log(selectedSponsorDescription)
        console.log(selectedSponsorName)
    }, [selectedSponsorDescription, selectedSponsorName]);

    // edit new sponsor function
    async function updateSponsor(id:string, docData: any) {
        const sponsorDoc = doc(database, `sponsor/${id}`)
        await setDoc(sponsorDoc, docData, {merge: true})
        console.log("the value has been written to the database")
    }

    function submitForm(e:  React.FormEvent<HTMLFormElement>) {
        updateSponsor(selectedSponsorID, {name: selectedSponsorName, description: selectedSponsorDescription})

    }


    return (
        <div>
            <form onSubmit={(event) => {submitForm(event)}}>
                edit sponsor form
                <select style={{color:"black"}} value={selectedSponsorID}
                        onChange={(event) => {
                            setSelectedSponsorID(event.target.value)
                        }}>
                {
                    sponsorList?.map((sponsor) => (
                        <option key={sponsor.id} value={sponsor.id}>{`${sponsor.name}`}</option>
                    ))
                }
                </select><br/>
                <label>Sponsor name</label><br/>
                <input style={{ color: "black", fontSize:"40px" }}
                       type="text" required value={selectedSponsorName} onChange={(event) => {setSelectedSponsorName(event.target.value)}}/>
                <br/>
                <label>Sponsor description</label><br/>
                <textarea style={{ color: "black", fontSize:"40px" }}
                          rows={5} cols={33} required value={selectedSponsorDescription} onChange={(event) => {setSelectedSponsorDescription(event.target.value)}}></textarea>
                <br/>
                <input type="submit" value={"edited existing sponsor"}/>
            </form>
        </div>
    )
}


function FormContainer() {
    const [showCreateForm, setShowCreateForm] = useState(true)


    return (
        <>
            <div className={"Form-container"} style={{
                color: "white",
                fontSize: "120px",
                paddingTop: "70px",
                paddingLeft: "20px"
            }}>
                <button onClick={() => {setShowCreateForm(!showCreateForm)}}> {`show Create Form ${showCreateForm}`} </button>
                {showCreateForm ?
                    <CreateSponsorForm/>
                    : <></>
                }
                {!showCreateForm ?
                    <EditSponsorForm/>
                    :<></>
                }
            </div>
        </>
    )
}


export default FormContainer;