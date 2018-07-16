import React from 'react';

class Header extends React.Component {
    convertirPseudo = (PSEUDO) => {
        // Retourne le test REGEX (i = min ou MAJ) match avec la 1ere Lettre Pseudo [0]
        // (ALORS = ?) affiche `d'` (SINON = :) affiche `de `
        return /[aeiouy]/i.test(PSEUDO[0]) ? `d'${PSEUDO}` : `de ${PSEUDO}`
    }
    
    render () {
        return (
            <header>
                <h1>La boîte à recette {this.convertirPseudo(this.props.PSEUDO)}</h1>
            </header>
        );
    };

    static propTypes = {
        PSEUDO: React.PropTypes.string.isRequired
    };
};

export default Header;