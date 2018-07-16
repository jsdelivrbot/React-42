import React from 'react';

class Connexion extends React.Component {
    goToApp = event => {
        event.preventDefault();

        const PSEUDO = this.boxInput.value;
        this.context.router.transitionTo(`/box/${PSEUDO}`);
    };

    render () {
        return (
            <div className = 'connexionBox'>
                <from className = 'connexion'
                      onSubmit = {(e) => this.goToApp(e)} >

                    <h1>Ma Boîte à Recettes</h1>

                    <input type = 'text'
                           placeholder = 'Nom du Chef'
                           pattern = '[A-Za-z-]{1,}'
                           required
                           ref = {(input) => {this.box.Input = input}}
                    />
        
                    <button type = 'submit'>GO</button>

                    <p>Caractères spéciaux INTERDIT.</p>
                </from>
            </div>
        );
    };

    static contextTypes = {
        router: React.PropTypes.object
    };
};

export default Connexion;