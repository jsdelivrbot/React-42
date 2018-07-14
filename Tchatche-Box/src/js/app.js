import React from 'react';
import Formulaire from './formulaire';
import Message from './message';
import BASE from '../bdd';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../css/animation.css';

class App extends React.Component {

    state = {
       ALL_MESSAGES: {} 
    };

    componentWillMount() {
        this.ref = BASE.syncState('/Msg', {
            context: this,
            state: 'ALL_MESSAGES'
        });
    };

    addMessage = (NEW_MESSAGE) => {
        // Import du state dans une Constante
        const ALL_MESSAGES = {...this.state.ALL_MESSAGES};

        // Ajout un message avec une clé Timestamp
        const TIMESTAMP = Date.now();
        ALL_MESSAGES[`NEW_MESSAGE-${TIMESTAMP}`] = NEW_MESSAGE;

        // On Supprime le plus vieux si +15 Messages
        Object.keys(ALL_MESSAGES).slice(0, -15).map(key => ALL_MESSAGES[key] = null);

        // MaJ du State avec TOUS les messages enregistés
        this.setState({ ALL_MESSAGES });
    };

    isUser = (PSEUDO) => {
        return PSEUDO === this.props.params.PSEUDO
    };

    render() {
        
        const ALL_MESSAGES = Object.keys(this.state.ALL_MESSAGES)
                                   .map(key => <Message key = {key}
                                                        details = {this.state.ALL_MESSAGES[key]}
                                                        isUser = {this.isUser} />);

        return(
            <div className = 'box'>
                <div>
                    <div className = 'messages'>
                        <ReactCSSTransitionGroup component = 'div'
                                                 className = 'message'
                                                 transitionName = 'message'
                                                 transitionEnterTimeout = {250}
                                                 transitionLeaveTimeout = {250}
                        >
                            {ALL_MESSAGES}
                        </ReactCSSTransitionGroup>
                    </div>

                    <Formulaire addMessage = {this.addMessage} 
                                PSEUDO = {this.props.params.PSEUDO}
                                length = {140}
                    />
                </div>
            </div>
        );
    };

    static propTypes = {
        params: React.PropTypes.object.isRequired
    };
};

export default App;