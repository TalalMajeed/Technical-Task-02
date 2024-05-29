import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import BlogPost from './BlogPost';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

//Displaying Nothing in the Root Component
//Due to JEST Testing, Rendering of the BlogPost Component is not Required
root.render(
  <React.StrictMode>
    <></>
  </React.StrictMode>
);

reportWebVitals();
