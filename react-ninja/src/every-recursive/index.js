const everyRecursive = (array, callback) => {

  return (function internalArray(internalArray) {
    if(!internalArray.length) {
      return true
    }
    const [head, ...rest] = internalArray

    if(!callback[head], array.indexOf(head), internalArray) {
      return false
    }

    return internalArray(rest)
  })(array)
}

export default everyRecursive