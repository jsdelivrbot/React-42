import React from 'react';
import PropTypes from 'prop-types';

import Range from '../Components/Range';
import Output from '../Components/Output';
import '../Style/App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      taille:170,
      poids:65,
      imc: 22.49,
      etat: 'Poids Normal'
    };
  };

  tailleChange(taille) {
    this.setState( {taille: taille}, this.setImc);
  };

  poidsChange(poids) {
    this.setState( {poids: poids}, this.setImc);
  };

  setImc() {
    let imc = ((this.state.poids / this.state.taille / this.state.taille) * 10000).toFixed(2);
    this.setState({ imc: imc, etat: this.getImcEtat(imc)}, function() {
      console.log(this.state);
    });
  };

  getImcEtat(imc) {
    if(imc >= 50 ) return 'Mort';
    if(imc >= 40 && imc <= 49.9) return 'Obésité Morbide';
    if(imc >= 30 && imc <= 39.9) return 'Obésité';
    if(imc >= 25 && imc <= 29.9) return 'Surpoids';
    if(imc >= 18.5 && imc <= 24.9) return 'Poids Normal';
    if(imc >= 17.5 && imc <= 18.4) return 'Anorexie';
    if(imc >= 15 && imc <= 17.4) return 'Anorexie Sévère';
    if(imc >= 12.5 && imc <= 14.9) return 'Anorexie Critique';
    if(imc < 12.4) return 'Mort'
  };

  render() {
    return (
      <div className = 'App'>

        <h1>Indice de Masse Corporelle</h1>

        <form>
          <div>
            <label>Taille</label>
            <Range onChange = {this.tailleChange.bind(this)} 
                   value = {this.state.taille}
            />
          </div>
          
          <div>
            <label>Poids</label>
            <Range onChange = {this.poidsChange.bind(this)} 
                   value = {this.state.poids}
            />
          </div>
        </form>
        
        <Output data = {this.state}/>
      </div>
    );
  };
};

App.propTypes = {
  taille : PropTypes.number,
  poids : PropTypes.number,
  imc : PropTypes.number,
  etat: PropTypes.string
};

export default App;
