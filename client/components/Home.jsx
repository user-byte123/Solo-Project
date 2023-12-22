import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faCircleQuestion, faEdit, faHospital, faKeyboard, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function About() {
    return(
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
            <div className='outerContainer'>
                <div className='card'>
                    <h2 className='cardTitle'>Insurance Lookup</h2>
                    <p className='cardDescription'>Please fill out the following information below to pull up your coverage.</p>
                    <label>Insurance: </label>
                    <select name="insurance" for="insurance">
                        <option value="Select An Insurance">Select An Insurance</option>
                        <option value="Aetna">Aetna</option>
                        <option value="CVS Caremark">CVS Caremark</option>
                        <option value="Express Scripts">Express Scripts</option>
                    </select>
                    <p className='cardInputBox'>Name: <input  text='string'/></p>
                    <p className='cardInputBox'>ID Number: <input  text='string'/></p>
                    <p className='cardInputBox'>Group Number: <input  text='number'/></p>
                    <p className='cardInputBox'>Bin Number: <input  text='number'/></p>
                    <Link to='/druglist'>
                    <button className='cardSubmit'>Submit</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default About;