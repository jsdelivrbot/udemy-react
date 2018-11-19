import React from 'react';
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux' 
import { addExpense } from '../actions/expenses'

const AddExpensePage = ({ dispatch, history }) => (
  <div>
    <h1>AddExpense</h1>  
    <ExpenseForm 
      handleSubmit={(expense) => {
        dispatch(addExpense(expense))
        history.push('/')
      }}
    />
  </div>
);

export default connect()(AddExpensePage);
