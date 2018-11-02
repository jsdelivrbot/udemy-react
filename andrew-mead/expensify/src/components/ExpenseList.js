import React from 'react';
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'

const ExpenseList = (props) => 
  <div>
    ExpenseList
    {props.expenses.map((expense, i) => {
      return <ExpenseListItem key={i} {...expense} />
    })}
  </div>


const mapStateToProps = state => ({
    expenses: selectExpenses(state.expenses, state.filters)
})

export default connect(mapStateToProps)(ExpenseList)
