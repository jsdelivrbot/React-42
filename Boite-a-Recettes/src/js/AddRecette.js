import React from 'react';

class AddRecette extends React.Component {
    
    creerRecette = event => {
        event.preventDefault();
        const RECETTE = {
            nom: this.nom.value,
            image: this.image.value,
            ingredients: this.ingredients.value,
            instructions: this.instructions.value
        };

        this.props.ajouterRecette(RECETTE);
        this.recetteForm.reset();
    };

    render () {
        return (
            <div className = 'card'>
                <form className = 'admin-form ajouter-recette'
                      ref = {input => this.recetteForm = input}
                      onSubmit = {e => this.creerRecette(e)} >

                    <input ref = {input => this.nom = input}
                           type = 'text'
                           placeholder = 'Nom de la Recette' />
                    
                    <input ref = {input => this.image = input}
                           type = 'text'
                           placeholder = "Adresse de l' image" />
                    
                    <textarea ref = {input => this.ingredients = input}
                              rows = '3'
                              placeholder = 'Liste des ingredients séparés par une virgule'>
                    </textarea>

                    <textarea ref = {input => this.instructions = input}
                              rows = '15'
                              placeholder = 'Liste des instructions (une par ligne)'>
                    </textarea>

                    <button type = 'submit'>Ajouter une recette</button>
                </form>
            </div>
        );
    };

    static propTypes = {
        ajouterRecette: React.PropTypes.func.isRequired
    };
};

export default AddRecette;