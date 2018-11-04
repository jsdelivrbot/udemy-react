const filterRecursive = (array, cb) => {

  const internalFilterRecursive = function(internalArray, cb) {
    
    if(!internalArray.length) {
      return []
    }

    const [firstElement, ...rest] = internalArray
      
    return !cb(firstElement, array.indexOf(firstElement), array) 
      ? internalFilterRecursive(rest, cb)
      : [firstElement, ...internalFilterRecursive(rest, cb)]  
  }

  return internalFilterRecursive(array, cb)
 }



export default filterRecursive