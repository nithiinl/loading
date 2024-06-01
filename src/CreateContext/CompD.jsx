import React, { useContext } from 'react'
import { MyContext } from './CompA'

export default function CompD() {

    const value=useContext(MyContext) //3. imprting an useContext
  return (
    <div className='box'>
      ComponentD
      <h1>{value.Name.name1}</h1>
      <h1>{value.Age.age1}</h1>
    </div>
  )
}
