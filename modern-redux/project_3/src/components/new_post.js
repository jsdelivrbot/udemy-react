import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NewPost extends Component {
  render () {
    return (
      <Link
        className="text-sx-right"
        to="/"
      >
        cancel  
      </Link>
    )
  }
}

export default NewPost
