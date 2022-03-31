import React from 'react'
import ListItem from './ListItem'

export default function Dashboard() {
  console.log('dash hit')

  const mockData = [
    { progression: false, details: 'do some code', date: '31/03/2022' },
    { progression: false, details: 'do some more code', date: '31/03/2022' },
    { progression: false, details: 'try some typescript', date: '31/03/2022' }
  ]
  return (
    <>
      <h1>Your List</h1>
      {mockData.map((data, idx) => {
        return (
          <ListItem
            key={idx}
            progression={data.progression}
            details={data.details}
            date={data.date}
          />
        )
      })

      }
    </>
  )
}
