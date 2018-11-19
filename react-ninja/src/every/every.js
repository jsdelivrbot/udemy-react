const every = (array, callback) => { 
  for(let i = 0, len = array.length; i < len; i++) {
    if(!callback(array[i], i, array)) {
      return false
    }
  }
  return true
}

export default every