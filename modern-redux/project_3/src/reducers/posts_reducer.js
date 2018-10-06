import { mapKeys } from 'lodash'
import { FETCH_POSTS, fetchPosts } from '../actions'

const postsReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id')
  }
  return state
}

export default postsReducer
