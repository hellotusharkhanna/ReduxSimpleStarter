import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import VideoList from './components/video_list';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBAxmDddrgL9GWQgQtZA_M4fF9byzpEaWo';

class App extends Component {
  // To setup State
  constructor(props) {
    super(props);

    this.state = { videos : [] };
    
    YTSearch({key: API_KEY, term: 'piano'}, (videos) => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={ this.state.videos } />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
