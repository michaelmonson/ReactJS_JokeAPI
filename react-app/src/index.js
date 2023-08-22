//Core Files and the React App:
import React from 'react';

//Enables the rendering of React components on the client (in the browser) ~ Used at the top level of the App to initialize the React tree.
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

import './index.css';
import reportWebVitals from './reportWebVitals';

const root = document.createElement('div');
root.id = 'root';
document.body.appendChild(root);
// const root = document.getElementById('root');

ReactDOM.createRoot(root).render(<App />);

/* If you want to start measuring performance in your app, pass a function to log results (example: reportWebVitals(console.log))
 * or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 */
reportWebVitals();
