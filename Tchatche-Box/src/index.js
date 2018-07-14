// React
import React from 'react';
import ReactDom from 'react-dom';

// Component
import Connexion from './js/connexion';
import App from './js/app';
import ERROR404 from './js/error404';

// Router
import { BrowserRouter, Match, Miss } from 'react-router';

// Style
import './css/index.css';

const ROOT = () => {
    return(
        <BrowserRouter>
            <div>
                <Match exactly
                       pattern = '/'
                       component = {Connexion}
                />

                <Match pattern = '/pseudo/:PSEUDO'
                       component = {App}
                />

                <Miss component = {ERROR404} />
            </div>
        </BrowserRouter>
    );
};

ReactDom.render (
    <ROOT />, document.getElementById('root')
);