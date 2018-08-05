import _ from "lodash";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";

import SearchBar from './components/search_bar.js'
import VideoList from './components/video_list.js'

const API_KEY = "AIzaSyDSmaJs9xXoZ0WQK5XO90_AIwjIBhQH4Us";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: []
    }

    YTSearch({ key: API_KEY, term: 'drake'}, videos => this.setState({ videos }))
  }

  render(){
    return (
      <div className="app">
        <SearchBar />
        <VideoList videos={this.state.videos}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
