import React from 'react';
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'

const ExpenseDashboardPage = () => (
  <div>
    This is from my dashboard component!
    <ExpenseList />
    <ExpenseListFilters />
  </div>
);


export default ExpenseDashboardPage;
