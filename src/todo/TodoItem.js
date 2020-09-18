import React from 'react'

export default function TodoItem({itemo}) {
  return (
  <li><strong>{itemo.id+' '}</strong>{itemo.title}</li>
    
  )
}