import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectBook } from '../actions'

class BookList extends Component {
  renderList() {
    return this.props.books.map((book, i) =>
      <li key={i}
        className="list-group-item"
        onClick={() => this.props.selectBook(book)}>{book.title}
      </li>)
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  }
}

function mapDispatchToProps(anyName) {
  return bindActionCreators({ selectBook: selectBook }, anyName)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)
