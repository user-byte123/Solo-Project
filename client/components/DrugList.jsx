import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Drug from './Drug';

class DrugList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fetchedDrugs: false,
            drugs: [],
            modalState: {
                open: false,
                type: null,
                position: {top:0, left: 0},
                id: null
            }
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    componentDidMount() {
        fetch('/api/')
          .then(res => res.json())
          .then((drugs) => {
            if (!Array.isArray(drugs)) drugs = [];
            return this.setState({
                drugs,
                fetchedDrugs: true
            });
          })
          .catch(err => console.log('Drugs.componentDidMount: get Drugs: ERROR: ', err));
    }
    openModal(type, position, id) {
        this.setState({
            modalState: {
                ...this.state.modalState,
                open:true,
                type,
                position,
                id
            }
        });
    }
    closeModal() {
        this.setState({
            modalState: {
                ...this.state.modalState,
                open: false
            }
        });
    }
    render() {
        if (!this.state.fetchedDrugs) return (
            <div>
                <h1>Loading data, please wait...</h1>
            </div>
        );
        
        const { drugList } = this.state;

        if (!drugList) return null;

        if (!drugList.length) return (
            <div>Sorry, no drugs found</div>
        );

        const drugElems = drugList.map((med, i) => {
            return (
                <Drug
                key={i}
                info={med}
                openModal={this.openModal}
                />
            );
        });
        return (
            <section className="mainSection">
                <header className='pageHeader'>
                    <h2>Formulary</h2>
                    <Link to={'/create'}>
                        <button type="button" className="addDrugButton">
                            Add A Drug
                        </button>
                    </Link>
                </header>
                <div className="drugContainer">
                    {drugElems}
                </div>
            </section>
        )
    }
}

export default Characters;