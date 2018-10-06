import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class BookDetail extends Component {

  render() {
    if(!this.props.book) return <div>Select a book</div>

    return (
      <div className="">
        Book Detail
        {this.props.book.title}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail)
