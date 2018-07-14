import React from 'react';

class Formulaire extends React.Component {

    state = {
        LENGTH: this.props.length
    }

    createMessage = event => {
        event.preventDefault();

        const NEW_MESSAGE = {
            NEW_MESSAGE: this.NEW_MESSAGE.value,
            PSEUDO: this.props.PSEUDO
        };

        this.props.addMessage(NEW_MESSAGE);

        // Reset de la Message Box ET du Compteur
        this.messageForm.reset();
        const LENGTH = this.props.length;
        this.setState({ LENGTH });
    };

    compteur = event => {
        const LENGTH = this.props.length - this.NEW_MESSAGE.value.length;


        // MaJ du State Compteur de caractères
        this.setState({ LENGTH });
    };

    render() {
        return(
            <form className = 'form'
                  onSubmit = {e => this.createMessage(e)}
                  ref = {input => this.messageForm = input} >
                
                <textarea required 
                          maxLength = {this.props.length}
                          ref = {input => this.NEW_MESSAGE = input}
                          onChange = {e => this.compteur(e)} >
                </textarea>
                
                <div className = 'info'>{this.state.LENGTH}</div>
                
                <button type = 'submit'>Envoyer !</button>
            </form> 
        );
    };

    static propTypes = {
        addMessage: React.PropTypes.func.isRequired,
        PSEUDO: React.PropTypes.string.isRequired,
        length: React.PropTypes.number.isRequired
    };
};

export default Formulaire;