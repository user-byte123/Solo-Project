import React, { useState, useEffect } from 'react';

function DrugList(props) {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/api')
					.then(response => response.json())
					.then(data => setData(data))
					.catch(console.error)
    },[])

		return (
			<div>
				<ul>
					{data.map(item => (
						<li key={item.id}>
							ID: {item.name}
						</li>
					))}
				</ul>
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