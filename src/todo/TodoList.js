import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

const styles = {
  ul: {
    listStyle: 'none',
    margin: 0,
    padding: 0
  }
}

function TodoList(props) {
  return (
    <ul style={styles.ul}>
      {props.todoso.map(todo => {
        return <TodoItem itemo={todo} key={todo.id}/>
      })}
    </ul>
  )
}

TodoList.propTypes = {
  todoso: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default TodoList