import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyringe, faPills, faMedkit, faHospital, faSearch, faTablets, faBarcode, faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'

function Savings() {
    return (
        <div className='mainSavings'>
            <div >
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
            <div>
                <div className='medicationCard'>
                    <button className='syringeBtn'><FontAwesomeIcon icon={faSyringe}/></button>
                    <button className='tabletBtn'><FontAwesomeIcon icon={faPills}/></button>
                    <button className='medKitBtn'><FontAwesomeIcon icon={faMedkit}/></button>
                </div>
            </div>
            <div className='saveOnMeds'>
                <h1>How To Save On Medications</h1>
                <p>Is your insurance not covering your medication? Try these RxSave Coupns and follow the steps below!</p>
                <div className='stepsSavings'>
                    <div className='childStepsSavings'>
                        <h3>Find Your Medication</h3>
                        <div><p className='iconSavings'><FontAwesomeIcon icon={faTablets}/></p></div>
                    </div>
                    <div className='childStepsSavings'>
                        <h3>Download Coupon</h3>
                        <div className='iconSavings'><FontAwesomeIcon icon={faBarcode}/></div>
                    </div>
                    <div className='childStepsSavings'>
                        <h3>Bring it to Your Pharmacy</h3>
                        <div className='iconSavings'><FontAwesomeIcon icon={faUserDoctor}/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Savings;