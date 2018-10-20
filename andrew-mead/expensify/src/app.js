import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import AppRouter from './routers/AppRouter'

import store from './store'

const ExpenseDashboardPage = () => (
  <div>
    From my dashboard component
  </div>
)
 
const AddExpensePage = () => (
  <div>
    From my Add component
  </div>
)

const HelpPage = () => (
  <div>
    From my Help component
  </div>
)
 
const EditExpensePage = () => (
  <div>
    From my Edit component
  </div>
)

const NotFound = () => (
  <div>
    NotFound
    <Link to="/">Home Page</Link>
  </div>
)

const Header = () => (
  <header>
    <h1>
      Expensify
    </h1>
    <NavLink activeClassName="is-active" exact to="/">Dashboard</NavLink>
    <NavLink activeClassName="is-active" to="/create">Create</NavLink>
    <NavLink activeClassName="is-active" to="/edit">Edit</NavLink>
    <NavLink activeClassName="is-active" to="/help">Help</NavLink>
  </header>
)



ReactDOM.render(<AppRouter />, document.getElementById('app'));

