import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faCircleQuestion, faEdit, faHospital, faKeyboard, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Contact() {
    return (
        <div>
            <div className='mainContainer'>
            <h1 className='main'><FontAwesomeIcon icon={faHospital} className='hospitalIcon'/>RxCoverage</h1>
				<nav className='navBar'>
					<ul className='navBarOptions'>
						<li className='navBarSelection'><Link to="/">Insurance Lookup</Link></li>
						<li className='navBarSelection'><Link to="/contact">Contact Provider</Link></li>
						<li className='navBarSelection'><Link to="/savings">Savings</Link></li>
						<li className='navBarSelection'><div className='search'><input type="text" /><FontAwesomeIcon icon={faSearch} className='hospitalIcon'/></div></li>
					</ul>
				</nav>
            </div>
            <div className='contactContainer'>
                <div className='imageContact'>
                    <img src="https://img.freepik.com/premium-vector/cute-happy-funny-pill-bottle-fight-with-virus-cartoon-character-illustration-icon-design-isolated_92289-1102.jpg?w=2000" alt="med pic" />
                </div>
                <div>
                    <h2>Contact Your Provider</h2>
                    <p className='pContact'>You've gone to the pharmacy only to be turned away because your insurance doesn't cover the medication your doctor provided. To avoid this circumstance, patients can be more proactive with their health and search for whether their medications are covered in the provider's office. <br/> <br/>Once patients are able to pull up their formulary, and find out their prescription is covered by their insurance, they can inform their provider before leaving. The provider can then look at the alternatives that are covered by the patient's insurance and prescribe the next best alternative for the patient or file a prior authorization.</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;

// import React from 'react';

// const Drug = ({ info }) => {
//   const { name, strength, measurement, route, tier, alternatives } = info;

// 	return (
// 		<article className="table">
// 			<div className="header">
// 				<div className="tableHeader">Name: </div>
// 				<div className="tableHeader">Strength: </div>
// 				<div className="tableHeader">Route: </div>
// 				<div className="tableHeader">Tier: </div>
// 				<div className="tableHeader">Alternatives: </div>
// 			</div>
// 			<div className="row">
// 				<div className="details">{name}</div>
// 				<div className="details">{strength} {measurement}</div>
// 				<div className="details">{route}</div>
// 				<div className="details">{tier}</div>
// 				<div className="details">{alternatives}</div>
// 			</div>
// 		</article>
// 	)
// }

// export default Drug;