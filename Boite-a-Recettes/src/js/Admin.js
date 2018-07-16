import React from 'react';
import AddRecette from './AddRecette';

class Admin extends React.Component {

    updateModif = (event, key) => {
        const RECETTE = this.props.recettes[key];
        const modifierRecette = {
            ...RECETTE, [event.target.name] : event.target.value
        };

        this.props.modifierRecette(key, modifierRecette);
    };

    renderAdmin = key => {
        const RECETTE = this.props.recettes[key];
        return (
            <div className = 'card' key = {key}>
                <form className = 'admin-form'>
                    <input type = 'text'
                           name = 'nom'
                           placeholder = 'Nom de la Recette'
                           onChange = {e => this.updateModif(e, key)}
                           value = {RECETTE.nom}
                    />

                    <input type = 'text'
                           name = 'image'
                           placeholder = "Adresse de l'image"
                           onChange = {e => this.updateModif(e, key)}
                           value = {RECETTE.image}
                    />

                    <textarea name ='ingredients'
                              rows = '3'
                              placeholder = 'Liste des ingredients'
                              onChange = {e => this.updateModif(e, key)}
                              value = {RECETTE.ingredients}>
                    </textarea>

                    <textarea name = 'instructions'
                              rows = '15'
                              placeholder = 'Liste des instructions'
                              onChange = {e => this.updateModif(e, key)}
                              value = {RECETTE.instructions}>
                    </textarea>
                </form>


                <button onClick = {() => this.props.supprRecette(key)} >Supprimer</button>
            </div>
        );
    };

    render () {

        const ADMIN_CARDS = Object.keys(this.props.recettes)
                                  .map(this.renderAdmin);

        return (
          <div className = 'cards'>
            <AddRecette ajouterRecette = {this.props.ajouterRecette} />

            {ADMIN_CARDS}

            <footer>
                <button onClick = {this.props.chargerRecette}>Remplir</button>
            </footer> 
          </div> 
        );
    };

    static propTypes = {
        recettes: React.PropTypes.object.isRequired,
        chargerRecette: React.PropTypes.func.isRequired,
        ajouterRecette: React.PropTypes.func.isRequired,
        modifierRecette: React.PropTypes.func.isRequired,
        supprRecette: React.PropTypes.func.isRequired,
        PSEUDO: React.PropTypes.string.isRequired
    };
};

export default Admin;