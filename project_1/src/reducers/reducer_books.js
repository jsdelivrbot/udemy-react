export default function(state, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      console.log('i also have access to this action')
    }
    return [
      { title: 'book1'},
      { title: 'book2'},
      { title: 'book3'},
      { title: 'book4'},
    ]
}
