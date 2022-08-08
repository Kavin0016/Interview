import React, { useEffect, useState } from 'react'
import { data } from "./../data/db";

export default function Keypad({ usedKeys }) {
  const [letters, setLetters] = useState(null)

  useEffect(() => {
    // fetch('http://localhost:3001/letters')
    //   .then(res => res.json())
    Promise.resolve(data)
      .then(({ letters }) => {
        setLetters(letters)
      })
  }, [])

  return (
    <div className="keypad">
      {letters && letters.map(l => {
        const color = usedKeys[l.key]
        return (
          <div key={l.key} className={color}>{l.key}</div>
        )
      })}
    </div>
  )
}
