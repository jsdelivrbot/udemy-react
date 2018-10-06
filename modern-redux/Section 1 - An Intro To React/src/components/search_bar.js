import React, { Component } from "react"

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = { term: 'drake' }
  }
  onInputChange(term) {
    this.setState({term})
    this.props.handleSearch(term)
  }
  render() {
    return <input onChange={event => this.onInputChange(event.target.value)} />
  }
}

export default SearchBar
