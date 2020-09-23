import React, {useState} from 'react'
import PropTypes from 'prop-types'

function AddTodo({addToo}) {
  const [value, setValue] = useState('')

  function subHan(event) {
    event.preventDefault()

    if (value.trim()) {
      addToo(value)
      setValue('')
    }
  }


  return (
    <form style={{marginBottom: '1rem'}} onSubmit={subHan}>
      <input value={value} onChange={event => setValue(event.target.value)}/> 
      <button type="submit">Добавить</button>
    </form>
  )
}

AddTodo.propTypes = {
  addToo: PropTypes.func.isRequired
}

export default AddTodo