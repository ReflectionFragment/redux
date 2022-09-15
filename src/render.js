import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Profile from "./content/Profile";

import {addPost} from "./redux/state";

export let renderEntireTree = (state)=> {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <App indeks={state} addPost={addPost}/>
        </React.StrictMode>);
}
