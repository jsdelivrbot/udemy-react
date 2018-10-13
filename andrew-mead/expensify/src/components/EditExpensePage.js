import React from 'react';
import { Link } from 'react-router-dom'

const EditExpensePage = (props) => {
  console.log(props)
  return (
    <div>
      Editing expense: {props.match.params.id}
      <Link to="/1111">
        go to 1111
      </Link>
      <Link to="edit/2222">
        go to 2222
      </Link>
    </div>
  )
}

export default EditExpensePage