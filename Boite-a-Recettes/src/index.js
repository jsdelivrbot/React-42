// React Modules
import React from 'react';
import ReactDOM from 'react-dom';

// Components
import App from './js/App';
import Connexion from './js/Connexion';
import ERROR404 from './js/Error404';

// Router
import { BrowserRouter, Match, Miss } from 'react-router';

// CSS
import './css/index.css';

const Root = () => {
    return (
        <BrowserRouter>
            <div>
                <Match exactly pattern = '/' component = {Connexion} />
                <Match pattern = '/box/:PSEUDO' component = {App} />
                <Miss component = {ERROR404} />
            </div>
        </BrowserRouter>
    );
};

ReactDOM.render(
    <Root />, document.getElementById('root')
);