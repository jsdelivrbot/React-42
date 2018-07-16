import React from 'react';
import Header from './Header';
import Admin from './Admin';
import Card from './Card';
import recettes from './recettes';

import BDD from '../bdd';

class App extends React.Component {

    state = {
        recettes: {}
    };

    componentWillMount() {
        this.ref = BDD.syncState( `${this.props.params.PSEUDO}/recettes`, {
            context: this,
            state: 'recettes'
        })
    };

    componentWillUnmount() {
        BDD.removeBinding(this.ref);
    };

    chargerRecette = () => {
        this.setState({ recettes });
    };

    ajouterRecette = (recette) => {
        const RECETTES = {...this.state.recettes};
        const TIMESTAMP = Date.now();
        recettes[`recette-${TIMESTAMP}`] = recette;
        this.setState({ recettes });
    };

    modifierRecette = (key, modifierRecette) => {
        const RECETTES = {...this.state.recettes};
        recettes[key] = modifierRecette;
        this.setState({ recettes });
    };

    supprRecette = key => {
        const RECETTES = {...this.state.recettes};
        recettes[key] = null;
        this.setState({ recettes });
    };

    render() {
        const CARDS = Object.keys(this.state.recettes)
                            .map(key => <Card key = {key} 
                                              details = {this.state.recettes[key]} />);

        return (
            <div className = 'box'>
                <Header PSEUDO = {this.props.params.PSEUDO} />
                
                <div className = 'cards'>
                    {CARDS}
                </div>

                <Admin recettes = {this.state.recettes}
                       chargerRecette = {this.chargerRecette}
                       ajouterRecette = {this.ajouterRecette}
                       modifierRecette = {this.modifierRecette}
                       supprRecette = {this.supprRecette}
                       PSEUDO = {this.props.params.PSEUDO}
                />
            </div>
        );
    };

    static propTypes = {
        params: React.PropTypes.object.isRequired
    };
};

export default App;