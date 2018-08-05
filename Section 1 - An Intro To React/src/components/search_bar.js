import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = { searchBarTerm: 'start' }
  }
  onInputChange(event) {

  }
  render() {
    return <input value={this.state.searchBarTerm} onChange={event => this.setState({ searchBarTermY: event.target.value })} />
  }
}

export default SearchBar
