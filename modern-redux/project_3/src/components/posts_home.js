import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchPosts } from '../actions'
import { map } from 'lodash'

class PostsHome extends Component {
  renderPosts () {
    return _.map(this.props.posts, post => <li className="list-group-item" key={post.id}>{post.title}</li>)
    //   return <li className="list-group-item" key={post.id}>{post.title}<li/>
    // })
  }

  render () {
    return (
      <div>
        <h3>Posts</h3>
        <div className="text-xs-right">
          <Link
            className="btn btn-primary"
            to="/posts/new"
            >
              Add a post
            </Link>
        </div>
        <ul>
          { this.renderPosts() }
        </ul>
      </div>
    )
  }

  componentDidMount() {
    this.props.fetchPosts()
  }
}

const mapStateToPros = ({ posts }) => ({ posts })

// const mapDispacthToProps = dispacth => {
//   return bindActionCreators({ fetchPosts }, dispacth)
// }
// export default connect(null, mapDispacthToProps)(PostsHome)
export default connect(mapStateToPros, { fetchPosts })(PostsHome)
