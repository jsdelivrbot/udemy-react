import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortByDate, sortByAmount } from '../actions/filters'

const ExpenseListFilters = ({ filters, dispatch }) => (
  <div>
    <input 
      type="text" 
      value={filters.text} 
      onChange={e => {
        dispatch(setTextFilter(e.target.value))
      }} 
    />
    <select 
      value={filters.sortBy}
      onChange={e => {
        const selectedValue = e.target.value

        if (selectedValue === 'date') {
          dispatch(sortByDate())
        }else if (selectedValue === 'amount') {
          dispatch(sortByAmount())
        }
      }}
      >
      <option value="date">Date</option>
      <option value="amount">Amount</option>
    </select>
  </div>
)

const mapStateToProps = ({ filters }) => ({
  filters
})


export default connect(mapStateToProps)(ExpenseListFilters)
