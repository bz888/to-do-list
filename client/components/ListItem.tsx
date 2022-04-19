import React, { SyntheticEvent } from 'react'
import { ListItem, todoItem } from '../types/types'

export default function ListItem (props: ListItem) {
  const { progression, description, createdAt, updatedAt } = props
  function handleClick (e: SyntheticEvent) {
    e.preventDefault()
    console.log('hello')
  }
  return (
    <div>
      <input type="checkbox" onChange={handleClick} checked={progression} />
      <p>{description}</p>
      <p>{createdAt}</p>
      <p>{updatedAt}</p>
    </div>
  )
}
