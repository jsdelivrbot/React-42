import React from 'react';
import ReactDom from 'react-dom';
import marked from 'marked';
import { SAMPLE_TEXT } from './js/sampleText';

import './style/css/bootstrap.min.css';
import './style/css/index.css';

class App extends React.Component {
    
    state = {
        TEXT: SAMPLE_TEXT
    };
    
// --- Permet d'enregistrer les modifications en cache
// --- Mounting -> Updating -> Unmounting   

    componentWillMount() {
        const LOCAL_STORAGE_TEXT = localStorage.getItem('TEXT');
    
        if(LOCAL_STORAGE_TEXT) {
            this.setState({ TEXT: LOCAL_STORAGE_TEXT });
        };
    };
 
    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('TEXT', nextState.TEXT);
    };

// --- Fin du Cycle de vie du Component

    editText = (event) => {
        const TEXT = event.target.value;
        this.setState({ TEXT });
    };

    renderText = (TEXT) => {
        const RENDER_TEXT = marked(TEXT, {sanitize: true});
        return { __html: RENDER_TEXT };
    };

    render() {
        return (
            <div className='container'>
            <h1 className='title'>Markdown Projet</h1>
                <div className='row'>
                    <div className='col-sm-5'>
                        <textarea rows='40' value={this.state.TEXT} className='form-control' onChange= {(e) => this.editText(e)} >
                        </textarea>
                    </div>

                    <div className='col-sm-7'>
                        <div className='form-control-bis' dangerouslySetInnerHTML = {this.renderText(this.state.TEXT)} />
                    </div>
                </div>
            </div>
        );
    };
};

ReactDom.render(
    <App />, document.getElementById('root')
);