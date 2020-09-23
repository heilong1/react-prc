import React from 'react'
import PropTypes from "prop-types"


function TodoReturner( {ret} ) {

  return (
    <span>
      <p>Новых целей нет. <button onClick={ret}>Вернуть старые</button></p>
      
    </span>
  )

}



TodoReturner.propTypes = {
  ret: PropTypes.func.isRequired
}

export default TodoReturner