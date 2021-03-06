import axios from 'axios'

export const FETCH_POSTS = 'FETCH_POSTS'

const ROOT_URL = 'http://reduxblog.herokuapp.com/api',
  API_KEY = 'key=WALTER_WHITE_123'

export const fetchPosts = () => {
  const request = axios.get(`${ROOT_URL}/posts?${API_KEY}`)

  return {
    type: FETCH_POSTS,
    payload: request
  }
}
