import React from 'react'
import { mockData } from './types'

export default function ListItem(props: mockData) {
  const { progression, details, date } = props
  return (
    <div>
      <input type="checkbox" checked={progression} />
      <p>{details}</p>
      <p>{date}</p>
    </div>
  )
}
