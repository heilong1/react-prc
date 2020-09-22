import React, {useState} from 'react'
import PropTypes from 'prop-types'

function AddTodo() {
  const [value, setValue] = useState('')
  return (
    <form style={{marginBottom: '1rem'}} onSubmit={submit}>
      <input value={value} onChange={event => setValue(event.target.value)}> </input>
      <button type="submit">Добавить</button>
    </form>
  )
}

export default AddTodo