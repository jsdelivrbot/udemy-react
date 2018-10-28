import { createStore, combineReducers, dispatch } from 'redux'
import uuid from 'uuid'


const initialState = {
  expenses: [],
  filters: {
    text: 'rent',
    sortBy: 'amount',
    startDate: null,
    endDate: null,
  },
}


const expensesReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return [
        action.expense,
        ...state,
      ]
    case REMOVE_EXPENSE:
      return state.filter(expense => expense.id !== action.id)    
    default:
      return state  
  }
}

const filtersReducers = (state = [], action) => {
  switch (action.type) {
    default:
      return state
  }
}

const reducers = combineReducers({
  expenses: expensesReducer,
  filters: filtersReducers,
})

const store = createStore(reducers, initialState)
  store.subscribe(() => console.log(store.getState()))


const ADD_EXPENSE = 'ADD_EXPENSE'

const addExpense = ({ description, note, amount, createAt } = {}) => ({
  type: ADD_EXPENSE,
  expense: {
    id: uuid(),
    description, 
    note, 
    amount, 
    createAt
  }
})

const REMOVE_EXPENSE = 'REMOVE_EXPENSE'

const removeExpense = id => ({
  type: REMOVE_EXPENSE,
  id
})



const ExpenseOne = store.dispatch(addExpense({
  description: '11111',
  note: null,
  amount: null,
  createdAt: null,
  }
))



store.dispatch(addExpense({
  description: '222222',
  note: null,
  amount: null,
  createdAt: null,
  }
))

store.dispatch(removeExpense(ExpenseOne.expense.id))