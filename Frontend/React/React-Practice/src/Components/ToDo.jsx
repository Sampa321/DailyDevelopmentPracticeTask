import React from 'react'

export default function TODO({todo}) {
  return (
    <div className='mt-3 pl-5 pr-5 p-3 rounded-xl flex items-center justify-between height-auto bg-blue-900'>
      <span className='text-white'>{todo.id}.</span>
      <span className='w-100 text-white'>{todo.todo}</span>
      <span className={`font-bold ${todo.completed? "text-green-400" : "text-red-700"}`}>{todo.completed? "Completed✅" : "Pending❌"}</span>
    </div>
  )
}