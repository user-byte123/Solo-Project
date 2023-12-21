import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faPaperPlane, faTrashAlt, faTrashCan } from '@fortawesome/free-regular-svg-icons';

function DrugList(props) {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/api')
					.then(response => response.json())
					.then(data => {
						console.log(data)
						//sort it to give alphabetical order
						setData(data.sort((a,b) => {return a.name.localeCompare(b.name)}))
					})
					.catch(console.error)
    },[])

		return (
			<div>
				<div className="btnContainer">
					<Link to="/drug">
					<button className='addDrugBtn'>Add New Drug</button>
					</Link>
				</div>
				<div className="header">
					<p>Name: </p>
					<p>Strength</p>
					<p>Route</p>
					<p>Tier</p>
					<p>Alternatives</p>
					<p></p>
				</div>
				<div>
					{data.map(item => (
						<div key={item._id} className="row">
							<p className='columns'>{item.name}</p>
							<p className='columns'>{item.strength} {item.measurement}</p>
							<p className='columns'>{item.route}</p>
							<p className='columns'>{item.tier}</p>
							<p className='columns'>{item.alternatives}</p>
							<p className='columns'>
								<Link to={`/delete/${item._id}`}>
									<button className='deleteBtn'><FontAwesomeIcon icon={faTrashAlt}/></button></Link>
								<Link><button className='updateBtn'><FontAwesomeIcon icon={faEdit}/></button>
								</Link>
							</p>
						</div>
					))}
				</div>
			</div>
		)
}


export default DrugList;

// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import Drug from './Drug';

// class DrugList extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			fetchedDrugs: false,
// 			drugList: []
// 		}
// 	};
// 	componentDidMount() {
// 		fetch('http://localhost:8080/')
// 			.then(res => {
// 				if (!res.ok) {
// 					throw new Error('Network response was not ok')
// 				}
// 				return res.json()
// 			})
// 			.then((drugList) => {
// 				if (!Array.isArray(drugList)) drugList = [];
// 				this.setState({
// 					drugList,
// 					fetchedDrugs: true
// 				});
// 			})
// 			.catch(err => console.log('Drug.componentDidMount: get drugs: Error: ', err))
// 	}
// 	render() {
// 		if (!this.state.fetchedDrugs) return (
// 			<div>
// 				<h1>Loading data, please wait...</h1>
// 			</div>
// 		);

// 		const { drugList } = this.state;
// 		if (!drugList) return null;
// 		if (!drugList.length) return(
// 			<div>Sorry, no drugs found</div>
// 		);

// 		const drugElems = drugList.map((med, i) => {
// 			return(
// 				<Drug
// 				key={i}
// 				info={med}
// 				/>
// 			)
// 		});
// 		return (
// 			<section className="mainSection">
// 				<header className="pageHeader">
// 					<h2>Formulary</h2>
// 					<Link to={'/drug'}>
// 						<button
// 						type="button"
// 						className="btnSecondary">Add Drug</button>
// 					</Link>
// 				</header>
// 				<div className="drugContainer">
// 					{drugElems}
// 				</div>
// 			</section>
// 		)
// 	}
// }

// export default DrugList;