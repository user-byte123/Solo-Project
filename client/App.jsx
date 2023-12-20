import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import DrugList from './components/DrugList';
import AddDrug from './components/AddDrug';

import './stylesheets/styles.css';

const App = props => {
    return (
        <div className="router">
            <main>
                <Switch>
                    <Route
                    exact
                    path="/"
                    component={DrugList}
                    />
                    <Route
                    exact
                    path="/drug"
                    component={AddDrug}
                    />
                </Switch>
            </main>
        </div>
    )
}
export default App;