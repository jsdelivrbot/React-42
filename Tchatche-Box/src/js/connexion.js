import React from 'react';
import '../css/animation.css';

class Connexion extends React.Component {
    
    goToTchat = event => {
        event.preventDefault();

        // Récupérer le Pseudo
        const PSEUDO = this.pseudoInput.value;

        // Changer l'URL
        this.context.router.transitionTo(`/pseudo/${PSEUDO}`);
    };
    
    render() {
        return(
            <div className = 'connexionBox'
                 onSubmit={(e) => this.goToTchat(e)}>

                <h1 className = 'title'>Tchatche Box </h1>

                <form className = 'connexion'>
                    
                    <input type = 'text'
                           placeholder = 'Pseudo'
                           required
                           ref = {(input) => {this.pseudoInput = input }}
                    />

                    <button type = 'submit'>GO</button>
                </form>
            </div>
        );
    };

    static contextTypes = {
        router : React.PropTypes.object
    };
};

export default Connexion;