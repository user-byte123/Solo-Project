import React from 'react';
// import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
// import { faMoneyBill1 } from '@fortawesome/free-regular-svg-icons'

//open modal --> used to control visibility or state of a modal = a fxn that changes a starte variable, triggering the modal to open or close
//destructuring the props info and openModal allows the component to access specific properties and a function passed down to it
//info: object that contains details about the drug 
//openModal: fxn passed down as a prop to control visibility of a modal component --> changing state variable in the parent component that renders 'Drug' 
//Drug is a COMPONENT that receives the info and a function --> which can be utilized w/in the Drug component for rendering drug information or triggering actions
const Drug = ({ info, openModal }) => {
    const {
        name, strength, measurement, route, tier, alternatives
    } = info;

    const openDetailsModal = (e, type, id) => {
        //gives coordinates of hte mouse pointer at the time when the event (like a click) occurs on the page --> helps see where the user interacted 
        const top = e.pageY;
        const left = e.pageX;
        openModal(type, {top, left}, id);
    };

    //what you'll see on the browser
    return(

        <article className="table">
            <div className="tableHeader">
                <div>Name: </div>
                <div>Strength: </div>
                <div>Route: </div>
                <div>Tier: </div>
                <div>Alternatives: </div>
            </div>
            <div>
                <div>{name}</div>
                <div>{strength} {measurement}</div>
                <div>{route}</div>
                <div>{tier}</div>
                <div>{alternatives}</div>
            </div>
        </article>
    )
}

export default Drug;