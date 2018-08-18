import React from 'react';
import PropTypes from 'prop-types';

class Range extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      value: props.value
    };
  };

  static defaultProps = {
    min: 30,
    max: 200,
    step: 0.5
  };

  onChange(event) {
    console.log(event.target.value);
    this.props.onChange(this.state.value);
    this.setState( {value: event.target.value} );
  };

  render() {
    return (
      <div className = 'range'>

        <input type = 'range'
               value = {this.state.value}
               min = {this.props.min}
               max = {this.props.max}
               step = {this.props.step}
               onChange = {this.onChange.bind(this)}
        />

      </div>
    );
  };
};

Range.propTypes = {
  min : PropTypes.number,
  max : PropTypes.number,
  step : PropTypes.number
};

export default Range;
