import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters'
import { DateRangePicker } from 'react-dates'

class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  }
  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate))
    this.props.dispatch(setEndDate(endDate))
  }

  onFocusChange = calendarFocused => {
    this.setState({ calendarFocused })
  }

  render() {
    return (
      <div>
        <input 
          type="text" 
          value={this.props.filters.text} 
          onChange={e => {
            dispatch(setTextFilter(e.target.value))
          }} 
        />
        <select 
          value={this.props.filters.sortBy}
          onChange={e => {
            const selectedValue = e.target.value
    
            if (selectedValue === 'date') {
              dispatch(sortByDate())
            } else if (selectedValue === 'amount') {
              dispatch(sortByAmount())
            }
          }}
          >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
        />
      </div>
    )
  }
} 

const mapStateToProps = ({ filters }) => ({
  filters
})


export default connect(mapStateToProps)(ExpenseListFilters)
