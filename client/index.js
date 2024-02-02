import React from 'react';
import ReactDom from 'react-dom/client';
import './stylesheets/styles.css'; 
import App from './App';

//ReactDom.render is deprecated, best to use createRoot and you have to get this from react-dom/client
//telling react we want to render our custom HTML element App into the place of this element w/ this element ID 
const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<App />)



//ReactDom.render is deprecated now
// ReactDom.render(<App />, document.getElementById('root'))
//importing a couple of things and this is what we see in the browser

// //allows us to make React components with JSX syntax
// import React from 'react';
// // renders React elements into the DOM
// import { createRoot } from 'react-dom/client';
// // allows client-side routing and keeps UI in sync w/ URL
// import { BrowserRouter } from 'react-router-dom';
// //main app component, where all other components are nested
// import App from './App';
// //how react application gets injected into HTML file and displayed in browser
// const root = createRoot(document.getElementById('root'))
// root.render(
//     <BrowserRouter>
//         <App />
//     </BrowserRouter>,
// )