import React from 'react';
import citations from './citations';


class App extends React.Component {
    state = { };

    componentWillMount() {
        this.genererCitation();
    }

    genererCitation = event => {
        // Création d'un tableau avec les citations
        const KEY_ARRAY = Object.keys(citations);

        // Génère une citation aléatoirement
        const KEY_RANDOM = KEY_ARRAY[Math.floor(Math.random() * KEY_ARRAY.length)];
        
        if(this.state.citation === citations[KEY_RANDOM].citation) {
            this.genererCitation();
            return;
        };

        this.setState(citations[KEY_RANDOM]);
    };

    render () {
        return (
            <div>
                <p>{this.state.citation}
                    <span>{this.state.auteur}</span>
                </p>
                <button onClick = {e => this.genererCitation(e)} >Une Autre Citation</button>
            </div>
        );
    };
};

export default App;