import { createStore } from 'redux'

const initState = { counter: 10 }

const incrementCount = n => {
  return {
    type: 'INCREMENT'
  }
}
  

const store = createStore((state = initState, action) => {
  switch (action.type) {
    case 'RESET':
      return { counter: 0 }
    case 'INCREMENT':
      return { counter: ++state.counter }
    default:
      return state
  }
})


store.subscribe(() => {
  console.log('store changed. state: ', store.getState())
})

store.dispatch(incrementCount(1))

store.dispatch({
  type: 'RESET'
})

