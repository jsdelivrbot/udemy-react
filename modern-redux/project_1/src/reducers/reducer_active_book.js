export default function(state = null, action){
  switch (action.type) {
  case 'BOOK_SELECTED':
    console.log('i have access to this action');
    return action.payload
  }
  return {...state, title: 'testing'}
}
