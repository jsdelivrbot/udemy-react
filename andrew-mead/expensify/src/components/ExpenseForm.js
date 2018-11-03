import React, { Component }  from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

class ExpenseForm extends Component {
  state = {
    description: '',
    note: '',
    amount: '',
    createdAt: moment(),
    calendarFocused: false,
  }

  onDescriptionChange = e => {
    const description = e.target.value
    this.setState({ description })
    console.log(description)
  }

  onNoteChange = e => {
    const note = e.target.value
    
    this.setState({ note })
  }

  onAmuntChange = e => {
    const amount = e.target.value
    if (amount.match(/^\d+(\.\d{0,2})$/ig)) {
      this.setState({ amount })
    }
  }

  onDateChange = createdAt => {
    this.setState({ createdAt })
  }

  onFocusChange = ({ focused }) => {
    this.setState({ calendarFocused: focused })
  }

  render() {
    return (
      <div>
        <input 
          type='text'
          autoFocus 
          placeholder='Description'
          value={this.state.value}
          onChange={this.onDescriptionChange} 
        />
        
        <input 
          type='number'
          placeholder='amount'
        />

        <SingleDatePicker 
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
        />
        <textarea
          value={this.state.note}
          onChange={this.onNoteChange}
          placeholder='Add a note for your expense (optional)'
        >
        </textarea>
      </div>
    )
  }
}

export default ExpenseForm