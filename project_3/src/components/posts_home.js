import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchPosts } from '../actions'

class PostsHome extends Component {
  render () {
    return (
      <div>
        Home
      </div>
    )
  }

  componentDidMount() {
    this.props.fetchPosts()
  }
}

// const mapDispacthToProps = dispacth => {
//   return bindActionCreators({ fetchPosts }, dispacth)
// }
// export default connect(null, mapDispacthToProps)(PostsHome)
export default connect(null, { fetchPosts })(PostsHome)
