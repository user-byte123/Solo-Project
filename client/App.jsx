import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddDrug from './components/AddDrug'
import DrugList from './components/DrugList'
import DeleteDrug from './components/DeleteDrug'
import UpdateDrug from './components/UpdateDrug'

//standard js fxn, and returns jsx code --> react component and use as HTML element and it is a function that is defined and exported --> fxn that acts as a component that returns JSx
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<DrugList />}/>
        <Route exact path='/drug' element={<AddDrug />}/>
        <Route exact path='/delete/:id' element={<DeleteDrug />}/>
      </Routes>
    </Router>
  )
}

export default App;







// import React, { Component } from 'react';
// import { Route, Routes } from 'react-router-dom';

// import DrugList from './components/DrugList';
// import AddDrug from './components/AddDrug';

// import './stylesheets/styles.css';


// const App = props => {
//   return (
//     <div className="router">
//         <Routes>
//           <Route path="/" element={<DrugList />}></Route>
//           <Route path="/drug" element={<AddDrug />}></Route>
//         </Routes>
//     </div>
//   );
// };
// export default App;