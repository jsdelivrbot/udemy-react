import _ from "lodash";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";

import SearchBar from './components/search_bar.js'
import VideoList from './components/video_list.js'
import VideoDetail from './components/video_detail.js'

const API_KEY = "AIzaSyDSmaJs9xXoZ0WQK5XO90_AIwjIBhQH4Us";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: [],
      selectedVideo: null
    }
    this.videoSearch('test')
  }

  videoSearch(term) {
    console.log(term)
    YTSearch({ key: API_KEY, term: term}, videos => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      })
    })
  }

  render(){
    const debouncedVideoSearch = _.debounce(term => { this.videoSearch(term) },500)

    return (
      <div className="app">
        <SearchBar handleSearch={debouncedVideoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          handleSelectVideo={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
