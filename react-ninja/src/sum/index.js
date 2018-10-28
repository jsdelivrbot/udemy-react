const sum = array => {
  if(!array.length) {
    return 0;
  }
  const [first, ...rest] = array
  
  return first + sum(rest)
}

export default sum