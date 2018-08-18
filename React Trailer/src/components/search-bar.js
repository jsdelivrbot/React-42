import React from 'react'

class SearchBar extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            placeholder: 'Tapez votre Film',
            intervalBeforeRequest: 500,
            lockRequest: false
        };
    };
    
    render() {
        return (
            <div className = 'row'>
                <div className = 'col-md-12 input-group'>
                    <input type = 'text'
                           className = 'form-control input-lg' 
                           onChange = {this.handleChange.bind(this)} 
                           placeholder = {this.state.placeholder}
                    />
                    <span className = 'input-group-btn'>
                        <button className = 'btn btn-secondary' onClick = {this.handleOnClick.bind(this)}>Rechercher</button>
                    </span>
                </div>
            </div>
        );
    };

    handleChange(event) {
        this.setState({searchText : event.target.value});
        if(!this.state.lockRequest) {
            this.setState({lockRequest: true})
            setTimeout(function() {this.search()}.bind(this), this.state.intervalBeforeRequest);
        }
    };

    handleOnClick() {
        this.search();
    };

    search() {
        this.props.callback(this.state.searchText);
        this.setState({lockRequest: false});
    };
};

export default SearchBar;