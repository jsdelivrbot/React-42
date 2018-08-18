import React from 'react';

class Output extends React.Component {
  render() {
    let taille = this.props.data.taille;
    let poids = this.props.data.poids;
    let imc = this.props.data.imc;
    let etat = this.props.data.etat;

    return (
      <div className = 'output'>
        <h3>{taille} cm</h3>
        <h3>{poids} Kg</h3>
        <h3>{imc}</h3>
        <h3>{etat}</h3>
      </div>
    );
  };
};

export default Output;
