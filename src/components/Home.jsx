import React, { useContext } from 'react'
import { Context } from './main/context/Context'

export default function Home() {
  const{name,setName}=useContext(Context)
  return (
    <div className='bg-slate-50'>
      {name} 
    </div>
  )
}
