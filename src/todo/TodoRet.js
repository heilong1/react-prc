import React from 'react'
import PropTypes from "prop-types"


function TodoReturner( {ret} ) {

  return (
    <span>
      <p>Новых целей нет.</p>
      <button onClick={ret}>Вернуть старые</button>
    </span>
  )

}



TodoReturner.propTypes = {
  ret: PropTypes.func.isRequired
}

export default TodoReturner