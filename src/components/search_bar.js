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

    // onMouseClick() {
    //     event.target
    // }

    render() {
        return (
            <div>
                <input onChange={this.onInputChange.bind(this)} value={this.state.term} />
                {/* <button onClick={this.onMouseClick.bind(this)}></button> */}
            </div>
        )
    }
}

export default SearchBar;