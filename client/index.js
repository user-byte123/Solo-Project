//allows us to make React components with JSX syntax
import React from 'react';
// renders React elements into the DOM
import { render } from 'react-dom';
// allows client-side routing and keeps UI in sync w/ URL
import { BrowserRouter } from 'react-router-dom';
//main app component, where all other components are nested
import App from './App';
//how react application gets injected into HTML file and displayed in browser
render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    //looks for an HTML element w/ ID of 'app' this will be where the React application will be mounted/rendered
    document.getElementById('root'),
)