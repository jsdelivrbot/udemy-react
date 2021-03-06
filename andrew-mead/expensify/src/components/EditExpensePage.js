import React from 'react';
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { editExpense, removeExpense } from '../actions/expenses'

const EditExpensePage = (props) => {
  return (
    <div>
      Editing the expense with id of {props.match.params.id}
      { props.expense &&
        <div>
          <ExpenseForm 
            expense={props.expense} 
            handleSubmit={ expense => {
              props.dispatch(editExpense(props.expense.id, expense))
              props.history.push('/')
            }}  
          />
          <button onClick={() => {
            props.dispatch(removeExpense({ id: props.expense.id }))
            props.history.push('/')  
          }}>remove
          </button>  
        </div>
      }
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(expense => expense.id === props.match.params.id)
  }
}

export default connect(mapStateToProps)(EditExpensePage);
