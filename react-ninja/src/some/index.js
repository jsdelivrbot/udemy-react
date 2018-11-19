const some = (array, callback) => {
  
  for(let i = 0, len = array.length; i < len; i++) {
    if(!!callback([array[i]])) {
      return true
    }
  }
  return false
}

export default some 