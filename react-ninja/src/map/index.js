const map = (array, cb) => {
  if (!cb) {
    throw('A function must be passed')
  }
  const newArray = []
  
  for(let i = 0, len = array.length; i < len; i++) {
    newArray.push(cb(array[i], i, array))
  }

  return newArray
}

export default map