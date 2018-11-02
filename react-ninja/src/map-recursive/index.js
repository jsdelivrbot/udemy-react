const map = (array = [], cb) => {
  if(!cb) {
    throw('A function must be passed')
  }

  return (function internalMap(internalArray) {
    if(internalArray.length === 0) {
      return []
    }
  
    const [head, ...rest] = internalArray
  
    return [cb(head, array.indexOf(head), array), ...internalMap(rest, cb)]
  })(array)
}

export default map