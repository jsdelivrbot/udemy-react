const filter = (array, cb) => {
  const newArray = []

  for(let i = 0, len = array.length; i < len; i++) {
    if(!!cb(array[i])) {
      newArray.push(cb(array[i]))
    }
  }
  return newArray
}

export default filter