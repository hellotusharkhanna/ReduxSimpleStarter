import React, { Component } from 'react';

// One way
// const SearchBar = () => {
//     return <input />;
// }

// Second way
class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: ''};
    }

    onInputChange(event) {
        return this.setState({term: event.target.value});
    }

    render() {
        return (
            <div>
                <input onChange={this.onInputChange} />
                Value of input : {this.state.term}
            </div>
        )
    }
}

export default SearchBar;