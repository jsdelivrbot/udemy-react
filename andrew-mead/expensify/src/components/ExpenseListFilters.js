import React from 'react'
import { connect, bindActionCreators } from 'react-redux'
import { setTextFilter } from '../actions/filters'

const ExpenseListFilters = ({ filters, dispatch }) => (
  <div>
    <input type="text" value={filters.text} onChange={e => {
      dispatch(setTextFilter(e.target.value))
    }} />
  </div>
)

const mapStateToProps = ({ filters }) => ({
  filters
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setTextFilter }, dispatch)
}

export default connect(mapStateToProps)(ExpenseListFilters)
