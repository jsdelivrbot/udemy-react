const filter = (array, cb) => {
  const newArray = []

  for(let i = 0, len = array.length; i < len; i++) {
    if(!!cb(array[i], i, array)) {
      newArray.push(array[i])
    }
  }
  return newArray
}

export default filter